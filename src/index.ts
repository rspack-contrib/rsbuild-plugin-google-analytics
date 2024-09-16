import type { RsbuildConfig, RsbuildPlugin } from '@rsbuild/core';

export type PluginGoogleAnalyticsOptions = {
  /**
   * Google tag ID.
   */
  id: string;
  /**
   * Whether to enable Google Analytics.
   * @default true
   */
  enable?: boolean;
};

export const pluginGoogleAnalytics = ({
  id,
  enable = true,
}: PluginGoogleAnalyticsOptions): RsbuildPlugin => ({
  name: 'rsbuild-plugin-google-analytics',

  setup(api) {
    if (!enable) {
      return;
    }

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
