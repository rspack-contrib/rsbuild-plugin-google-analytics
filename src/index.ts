import type { RsbuildConfig, RsbuildPlugin } from '@rsbuild/core';

export type PluginGoogleAnalyticsOptions = {
  id: string;
};

export const pluginGoogleAnalytics = ({
  id,
}: PluginGoogleAnalyticsOptions): RsbuildPlugin => ({
  name: 'rsbuild-plugin-google-analytics',

  setup(api) {
    if (!id) {
      throw new Error(
        '[rsbuild-plugin-google-analytics] Google tag ID is required!',
      );
    }

    api.modifyRsbuildConfig((userConfig, { mergeRsbuildConfig }) => {
      const extraConfig: RsbuildConfig = {
        html: {
          tags: [
            {
              tag: 'script',
              attrs: {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
              },
            },
            {
              tag: 'script',
              children: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');`,
            },
          ],
        },
      };

      return mergeRsbuildConfig(extraConfig, userConfig);
    });
  },
});
