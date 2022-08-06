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
    ]
  },

}

module.exports = nextConfig
