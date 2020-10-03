import alfy, { OutputInput } from 'alfy';

import { fetch } from './fetch';

import { YANDEX_TRANSLATE_URL, FOLDER_ID } from '../constants';
import { Translate, TranslateInput } from '../types';

export const translate = async (input: string, dirs: string[] = []): Promise<void> => {
  const promises = dirs.map((dir) =>
    fetch<Translate, TranslateInput>('/translate', {
      folderId: FOLDER_ID,
      texts: [input],
      targetLanguageCode: dir,
    })
  );

  const responses = await Promise.all(promises);

  const items: OutputInput[] = [];

  responses.forEach(({ translations }) => {
    translations.forEach(({ text, detectedLanguageCode }) => {
      items.push({
        title: text,
        arg: `${YANDEX_TRANSLATE_URL}/?lang=${detectedLanguageCode}&text=${encodeURIComponent(
          input
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
};
