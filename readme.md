# Alfred Workflow for Yandex.Translate

> Triggers: `t`.

> Triggers: select text and `alt+t`.

![Request](https://s.dnlv.co/alfred/yatranslate-20160622.094042.png)
![Response](https://s.dnlv.co/alfred/yatranslate-20160622.094749.png)

By default just Russian -> English and English -> Russian.

Use [Yandex.Translate API](https://tech.yandex.com/translate/).

## Install

Download and open file using [Alfred 3](https://www.alfredapp.com/).

P.S.: You need to [buy the Powerpack](https://buy.alfredapp.com/) to use this workflow.

```bash
npm install -g alfred-yatranslate
```

- Open [Yandex.Translate Token request form](https://tech.yandex.com/keys/get/?service=trnsl) and request API key for you
- After on [this page](https://tech.yandex.com/keys/?service=trnsl) you can see all your keys for API requests.
- Copy your API key to workflow as `YANDEX_TRANSLATE_TOKEN`.
- Also you can modify `MYLANGS` with your languages. Comma-separated.
- That's all, now open your Alfred and enjoy ;)


## Licenses and Copyrights

MIT © 2019 [Michael Danilov](https://danilov.me)

[Terms of Use of API Yandex.Translate Service](https://yandex.com/legal/translate_api/)

Yandex.Translate logo © [Yandex](https://www.yandex.com/)
