import alfy from 'alfy';
import without from 'lodash/without';

import { FOLDER_ID, MY_LANGS } from '../constants';
import { Detect, DetectInput } from '../types';

import { fetch } from './fetch';

export const getDirs = async (input: string): Promise<string[] | undefined> => {
  try {
    const response = await fetch<Detect, DetectInput>('/detect', {
      folderId: FOLDER_ID,
      text: input,
    });

    const { languageCode } = response;
    const destLangs = without(MY_LANGS, languageCode);

    return destLangs;
  } catch (error) {
    alfy.error(error);
    return undefined;
  }
};
