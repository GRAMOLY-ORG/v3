/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/Me8aJQhkc3/',
        permanent: true,
      },
      {
        source: '/challenges',
        destination: 'https://challenges.gramoly.org/',
        permanent: true,
      },
      {
        source: '/fizika',
        destination: 'https://fizika.gramoly.org/',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig
