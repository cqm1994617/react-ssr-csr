const env = process.env.NODE_ENV

const plugins = [
  [
    "babel-plugin-styled-components"
  ],
  ["styled-jsx/babel"],
  ["@babel/plugin-proposal-class-properties"],
  ["@loadable/babel-plugin"]
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