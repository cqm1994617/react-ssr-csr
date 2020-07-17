const env = process.env.NODE_ENV
const server_dev = process.env.SERVER_DEV === '1'

const plugins = [
  [
    "babel-plugin-styled-components",
    {
      "ssr": false
    }
  ]
]

if (server_dev) {
  plugins.push(
    [
      "babel-plugin-transform-require-ignore",
      {
        "extensions": [".css", ".less", ".sass", "scss"]
      }
    ]
  )
}

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      env === 'production' ? {
        modules: false
      } : {}
    ],
    ["@babel/preset-react"]
  ],
  "plugins": plugins
}