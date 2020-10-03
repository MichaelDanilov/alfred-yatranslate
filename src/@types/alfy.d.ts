declare module 'alfy' {
  export interface OutputInput {
    title: string;
    arg: string;
    text: {
      copy: string;
    };
  }

  export const input: string;

  export function error(e: string | Error): Error;

  export function fetch<T, D>(
    url: string,
    opts: {
      method?: string;
      headers?: Record<string, string>;
      maxAge?: number;
      body?: D;
    }
  ): Promise<T>;

  export function output(outputInput: OutputInput[]): void;
}
