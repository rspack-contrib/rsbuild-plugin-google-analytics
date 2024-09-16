# rsbuild-plugin-google-analytics

An Rsbuild plugin to setup Google Analytics in your website.

<p>
  <a href="https://npmjs.com/package/rsbuild-plugin-google-analytics">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-google-analytics?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add rsbuild-plugin-google-analytics -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';

export default {
  plugins: [
    pluginGoogleAnalytics({
      // replace this with your Google tag ID
      // see: https://support.google.com/analytics/answer/9539598?hl=en
      id: 'G-xxxxxxxxxx',
    }),
  ],
};
```

## Options

Here are the available options:

| Name   | Type      | Description                        | Defaults    |
| ------ | --------- | ---------------------------------- | ----------- |
| id     | `string`  | Google tag ID                      | `undefined` |
| enable | `boolean` | Whether to enable Google Analytics | `true`      |

## License

[MIT](./LICENSE).
