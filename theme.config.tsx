import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  //   banner: {
  //     key: '001-wip-docs',
  //     text: <a href="/">👷 🔨 Site is under construction! 🚧 🚦</a>,
  //   },
  project: {
    link: 'https://github.com/unownhash/',
  },
  chat: {
    link: 'https://discord.gg/Vjze47qchG',
  },
  feedback: {
    content: null,
  },
  docsRepositoryBase: 'https://github.com/unownhash/docs/edit/main',
  footer: {
    text: '© 2023 Unownhash',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
    }
  },
  logo: (
    <>
      {/* https://theonlineconverter.com/convert-png-to-svg */}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 96.000000 96.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M666 901 c-9 -10 -25 -56 -35 -102 -13 -59 -22 -83 -32 -82 -8 1 -42
8 -77 15 -62 13 -63 14 -58 40 3 16 9 41 12 57 5 23 1 35 -19 55 -53 53 -93
22 -116 -90 l-17 -79 -76 -5 c-83 -5 -118 -25 -118 -66 0 -30 45 -64 85 -64
l33 0 -14 -47 c-8 -25 -14 -63 -14 -85 l0 -38 -58 0 c-66 0 -92 -18 -92 -62 0
-41 29 -58 98 -58 l62 0 -6 -27 c-3 -16 -12 -53 -20 -84 -26 -106 -12 -159 44
-159 38 0 58 32 77 123 10 48 21 87 25 87 4 0 24 -7 43 -15 20 -8 57 -15 82
-15 50 0 49 1 34 -70 -9 -43 -8 -55 5 -75 19 -28 75 -35 95 -12 8 10 51 189
51 213 0 2 38 4 83 4 92 0 117 13 117 62 0 36 -30 58 -77 58 l-40 0 0 85 1 85
53 0 c60 0 93 23 93 63 0 36 -32 59 -87 62 -26 1 -53 3 -59 3 -8 2 -6 26 7 80
10 42 18 89 19 103 0 52 -69 79 -104 40z m-216 -461 c7 -13 21 -20 40 -20 19
0 33 7 40 20 8 15 21 20 52 20 40 0 40 0 34 -32 -9 -43 -61 -96 -103 -104 -44
-8 -116 19 -137 52 -9 13 -19 38 -23 54 -5 30 -5 30 40 30 36 0 49 -4 57 -20z"
          />
        </g>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Unownhash</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kōji" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Documentation for Unownhash projects."
      />
      <meta property="og:image" content="/favicon.png" />
    </>
  ),
}

export default config
