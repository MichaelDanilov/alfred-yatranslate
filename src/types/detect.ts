export interface Detect {
  languageCode: string;
}

export interface DetectInput {
  text: string;
  languageCodeHints?: string[];
  folderId?: string;
}
