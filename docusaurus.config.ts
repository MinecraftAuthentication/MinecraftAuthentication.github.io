import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Minecraft Authentication',
  tagline: 'Link your Minecraft account to various services',
  favicon: 'img/favicon.ico',

  url: 'https://docs.minecraftauth.me',
  baseUrl: '/',

  organizationName: 'MinecraftAuthentication',
  projectName: 'MinecraftAuthentication.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/MinecraftAuthentication/MinecraftAuthentication.github.io',
        },
        blog: false,
        theme: {
          customCss: './src/css/minecraftAuth.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Minecraft Authentication Wiki',
      logo: {
        alt: 'The MinecraftAuth.me Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wiki',
          position: 'left',
          label: 'Wiki',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/MinecraftAuthentication/MinecraftAuthentication.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Minecraft Auth Discord',
              href: 'https://discord.gg/QhBWpURsD7',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Status Page',
              href: 'https://status.minecraftauth.me/',
            },
            {
              label: 'Plugin GitHub',
              href: 'https://github.com/MinecraftAuthentication/plugin',
            },
            {
              label: 'Java Lib GitHub',
              href: 'https://github.com/MinecraftAuthentication/lib',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://minecraftauth.me/">MinecraftAuth.me</a>. Built with <a href="https://docusaurus.io/">Docusaurus V3</a>.  </br>
      <i>Not endorsed by Mojang, Minecraft, Microsoft, or any other platform.</i>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
