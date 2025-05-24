import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  docs: { autodocs: true },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (config) => {
    config.plugins?.push(tsconfigPaths());
    return mergeConfig(config, {});
  },
};
export default config;
