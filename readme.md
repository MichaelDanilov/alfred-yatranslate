# Alfred Workflow for Yandex.Translate

> Triggers: `t`.

> Triggers: select text and `alt+t`.

![Request](https://s.dnlv.co/alfred/yatranslate-20160622.094042.png)
![Response](https://s.dnlv.co/alfred/yatranslate-20160622.094749.png)

By default just Russian -> English and English -> Russian.

Use [Yandex.Translate API](https://cloud.yandex.com/docs/translate/).

## Install

Download and open file using [Alfred 3](https://www.alfredapp.com/).

P.S.: You need to [buy the Powerpack](https://buy.alfredapp.com/) to use this workflow.

```bash
npm install -g alfred-yatranslate
```

- Use [this](https://cloud.yandex.com/docs/iam/operations/api-key/create) instruction to create API key for service account.
- Copy your API key to workflow as `YANDEX_TRANSLATE_TOKEN`.
- Copy your folder id to workflow as `FOLDER_ID`.
- Also you can modify `MYLANGS` with your languages. Comma-separated.
- That's all, now open your Alfred and enjoy ;)

## Licenses and Copyrights

MIT © 2020 [Michael Danilov](https://danilov.me)

[Terms of Use of Yandex.Cloud Platform Service](https://yandex.ru/legal/cloud_termsofuse/?lang=en)

Yandex.Translate logo © [Yandex](https://www.yandex.com/)
