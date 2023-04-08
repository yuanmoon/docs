// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vanus Docs',
  tagline: 'How to use Vanus',
  url: 'https://docs.linkall.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  favicon: 'img/vance-favicon.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'linkall-labs', // Usually your GitHub org/user name.
  projectName: 'vanus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "user-manual",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/linkall-labs/docs/edit/main',
        },
        googleAnalytics: {
          trackingID: 'G-TJL6X2XKQP',
          anonymizeIP: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/linkall-labs/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'NL3TWIITE6',
        apiKey: 'fa8450ef71ea4c0887cf399af0d4eef0',
        indexName: 'vanus-docs',
        contextualSearch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Vanus',
        logo: {
          alt: 'vanus log',
          src: 'img/vance-logo.png',
          href: 'http://www.linkall.com',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'introduction/what-is-vanus',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/linkall-labs/vanus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/linkall-labs/vanus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
          {
            href: 'https://linkall-group.slack.com/signup#/domain-signup',
            position: 'right',
            className: 'header-slack-link',
            'aria-label': 'Slack',
          },
          {
            href: 'https://twitter.com/Vanus_labs',
            position: 'right',
            className: 'header-twitter-link',
            'aria-label': 'Twitter',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/linkall-labs/vanus',
          },
          {
            label: 'Slack',
            href: 'https://linkall-group.slack.com/signup#/domain-signup',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/Vanus_labs',
          },
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Linkall Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
