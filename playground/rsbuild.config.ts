import { defineConfig } from '@rsbuild/core';
import { pluginGoogleAnalytics } from '../src';

export default defineConfig({
  plugins: [
    pluginGoogleAnalytics({
      id: 'G-xxxxxxxxxx',
    }),
  ],
});
