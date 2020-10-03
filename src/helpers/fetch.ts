import alfy from 'alfy';

import { YANDEX_TRANSLATE_API_URL, YANDEX_TRANSLATE_TOKEN } from '../constants';

import pkg from '../../package.json';

export const fetch = <T, D>(url = '', data: D): Promise<T> =>
  alfy.fetch<T, D>(`${YANDEX_TRANSLATE_API_URL}${url}`, {
    method: 'POST',
    headers: {
      authorization: `Api-Key ${YANDEX_TRANSLATE_TOKEN}`,
      'user-agent': `${pkg.name}@${pkg.version}`,
    },
    maxAge: 24 * 60 * 60 * 1000,
    body: data,
  });
