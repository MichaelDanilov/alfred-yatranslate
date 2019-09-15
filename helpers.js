const alfy = require('alfy');
const without = require('lodash.without');

const { YANDEX_TRANSLATE_API_URL, YANDEX_TRANSLATE_URL } = require('./constants');

const { YANDEX_TRANSLATE_TOKEN, MYLANGS = 'ru,en' } = process.env;

if (!YANDEX_TRANSLATE_TOKEN) {
  alfy.error('YANDEX_TRANSLATE_TOKEN must be set');
  process.exit(1);
}

const myLangs = MYLANGS.split(',');

const helpers = {
  fetch: (url = '') => alfy.fetch(`${YANDEX_TRANSLATE_API_URL}${url}`, {
    maxAge: 24 * 60 * 60 * 1000,
  }),
  getDirs: async (input) => {
    const response = await helpers.fetch(`/detect?key=${YANDEX_TRANSLATE_TOKEN}&text=${encodeURIComponent(input)}`);

    if (response.code === 200) {
      const { lang } = response;
      const destLangs = without(myLangs, lang);

      return destLangs.map((destLang) => `${lang}-${destLang}`);
    }

    return alfy.error(response.code);
  },
  translate: async (input, dirs = []) => {
    const promises = dirs.map((dir) => helpers.fetch(`/translate?key=${YANDEX_TRANSLATE_TOKEN}&text=${encodeURIComponent(input)}&lang=${dir}`));

    const responses = await Promise.all(promises);

    const items = [];

    responses.forEach(({ lang, text = [] } = {}) => {
      text.forEach((t) => {
        items.push({
          title: t,
          arg: `${YANDEX_TRANSLATE_URL}/?lang=${lang}&text=${encodeURIComponent(input)}`,
          text: {
            copy: t,
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
