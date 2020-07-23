const env = process.env.NODE_ENV

const plugins = [
  [
    "babel-plugin-styled-components"
  ],
  ["@babel/plugin-proposal-class-properties"]
]

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