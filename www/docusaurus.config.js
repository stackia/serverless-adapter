// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serverless Adapter',
  tagline:
    'Run REST APIs and other web applications using your existing Node.js application framework (NestJS, Express, Koa, Hapi, Fastify and many others), on top of AWS, Azure, Huawei and many other clouds.',
  url: 'https://viniciusl.com.br/serverless-adapter',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'h4ad', // Usually your GitHub org/user name.
  projectName: 'serverless-adapter', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/H4ad/serverless-adapter/tree/main/www/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/H4ad/serverless-adapter/tree/main/www/',
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
      navbar: {
        title: 'Serverless Adapter',
        logo: {
          alt: 'Serverless Adapter',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'main/intro',
            position: 'left',
            label: 'Docs',
            sidebarId: 'main',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'API',
          },
          {
            href: 'https://github.com/h4ad/serverless-adapter',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About Maintainer',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/vinii_joga10',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/vinilourenco/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/h4ad/serverless-adapter',
              },
            ],
          },
          {
            title: 'Sponsors',
            items: [
              {
                label: 'LIGA',
                to: 'https://liga.facens.br/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serverless Adapter. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'G7D9713FAL',

        // Public API key: it is safe to commit it
        apiKey: '935039e719649426185a3272f7875e62',

        indexName: 'serverless-adapter',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;
