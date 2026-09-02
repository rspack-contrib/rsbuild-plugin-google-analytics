// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginGoogleAnalytics } from '../src/index.ts';

define.app({
  plugins: [
    pluginGoogleAnalytics({
      id: 'G-xxxxxxxxxx',
    }),
  ],
});
