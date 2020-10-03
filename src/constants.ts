import alfy from 'alfy';

const {
  YANDEX_TRANSLATE_TOKEN: ENV_YANDEX_TRANSLATE_TOKEN,
  FOLDER_ID: ENV_FOLDER_ID,
  MYLANGS: ENV_MYLANGS = 'ru,en',
} = process.env;

if (!ENV_YANDEX_TRANSLATE_TOKEN) {
  alfy.error('YANDEX_TRANSLATE_TOKEN must be set');
  process.exit(1);
}

if (!ENV_FOLDER_ID) {
  alfy.error('FOLDER_ID must be set');
  process.exit(1);
}

export const YANDEX_TRANSLATE_API_URL = 'https://translate.api.cloud.yandex.net/translate/v2';
export const YANDEX_TRANSLATE_URL = 'https://translate.yandex.com';

export const YANDEX_TRANSLATE_TOKEN = ENV_YANDEX_TRANSLATE_TOKEN;
export const FOLDER_ID = ENV_FOLDER_ID;

export const MY_LANGS = ENV_MYLANGS.split(',');
