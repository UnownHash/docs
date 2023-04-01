// nextra config options
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

// nextjs config options
let nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

// Only enable CloudFront Image loader in production
if (process.env.NODE_ENV === 'production') {
  nextConfig.images.loader = 'custom'
  nextConfig.images.loaderFile = './imageLoader.js'
}

module.exports = withNextra(nextConfig)
