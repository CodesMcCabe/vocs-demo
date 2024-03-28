import { defineConfig } from "vocs";

export default defineConfig({
  title: "Docs",
  topNav: [
    { text: "Guide & API", link: "/docs/getting-started", match: "/docs" },
    { text: "Blog", link: "/blog" },
    {
      text: "version",
      items: [
        {
          text: "Changelog",
          link: "https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md",
        },
      ],
    },
  ],
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
      collapsed: true,
      items: [
        {
          text: "Config",
          link: "/config",
          collapsed: true,
          items: [
            {
              text: "double nested",
              link: "",
              collapsed: true,
              items: [
                {
                  text: "triple",
                  link: "",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/alchemyplatform",
    },
    {
      icon: "x",
      link: "https://twitter.com/AlchemyPlatform",
    },
  ],
  sponsors: [
    {
      name: "Collaborator",
      height: 120,
      items: [
        [
          {
            name: "Paradigm",
            link: "https://paradigm.xyz",
            image:
              "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg",
          },
        ],
      ],
    },
    {
      name: "Large Enterprise",
      height: 60,
      items: [
        [
          {
            name: "WalletConnect",
            link: "https://walletconnect.com",
            image:
              "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/walletconnect-light.svg",
          },
          {
            name: "Stripe",
            link: "https://www.stripe.com",
            image:
              "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg",
          },
        ],
      ],
    },
  ],
});
