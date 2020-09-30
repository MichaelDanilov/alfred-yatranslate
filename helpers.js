const alfy = require('alfy');
const without = require('lodash.without');

const pkg = require('./package.json');
const {
  YANDEX_TRANSLATE_API_URL,
  YANDEX_TRANSLATE_URL,
} = require('./constants');

const { YANDEX_TRANSLATE_TOKEN, FOLDER_ID, MYLANGS = 'ru,en' } = process.env;

if (!YANDEX_TRANSLATE_TOKEN) {
  alfy.error('YANDEX_TRANSLATE_TOKEN must be set');
  process.exit(1);
}
if (!FOLDER_ID) {
  alfy.error('FOLDER_ID must be set');
  process.exit(1);
}

const myLangs = MYLANGS.split(',');

const helpers = {
  fetch: (url = '', data = {}) => alfy.fetch(`${YANDEX_TRANSLATE_API_URL}${url}`, {
    method: 'POST',
    headers: {
      authorization: `Api-Key ${YANDEX_TRANSLATE_TOKEN}`,
      'user-agent': `${pkg.name}@${pkg.version}`,
    },
    maxAge: 24 * 60 * 60 * 1000,
    body: data,
  }),
  getDirs: async (input) => {
    try {
      const response = await helpers.fetch('/detect', {
        folder_id: FOLDER_ID,
        text: input,
      });

      const { languageCode } = response;
      const destLangs = without(myLangs, languageCode);

      return destLangs;
    } catch (error) {
      return alfy.error(error);
    }
  },
  translate: async (input, dirs = []) => {
    const promises = dirs.map((dir) => helpers.fetch('/translate', {
      folder_id: FOLDER_ID,
      texts: input,
      targetLanguageCode: dir,
    }));

    const responses = await Promise.all(promises);

    const items = [];
    responses.forEach(({ translations } = {}) => {
      translations.forEach(({ text, detectedLanguageCode } = {}) => {
        items.push({
          title: text,
          arg: `${YANDEX_TRANSLATE_URL}/?lang=${detectedLanguageCode}&text=${encodeURIComponent(
            input,
          )}`,
          text: {
            copy: text,
          },
        });
      });
    });

    items.push({
      title: 'Translated by Yandex.Translate',
      arg: YANDEX_TRANSLATE_URL,
      text: {
        copy: YANDEX_TRANSLATE_URL,
      },
    });

    alfy.output(items);
  },
};

module.exports = helpers;
