export interface Translate {
  translations: {
    text: string;
    detectedLanguageCode: string;
  }[];
}

export interface TranslateInput {
  sourceLanguageCode?: string;
  targetLanguageCode: string;
  format?: string;
  texts: string[];
  folderId?: string;
  model?: string;
  glossaryConfig?: {
    glossaryData?: {
      glossaryPairs: {
        sourceText: string;
        translatedText: string;
      }[];
    };
  };
}
