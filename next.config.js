// nextra config options
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

// nextjs config options
let nextConfig = {
  images: {
    // Cloudflare Pages doesn't support optimized images
    unoptimized: true,
  },
}

module.exports = withNextra(nextConfig)
