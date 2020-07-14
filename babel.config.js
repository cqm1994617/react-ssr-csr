module.exports = {
  overrides: [
    {
      test: ["./src/common", "./src/server"],
      "presets": [
        [
          "@babel/preset-env"
        ],
        ["@babel/preset-react"]
      ],
    },
    {
      test: ["./src/client"],
      "presets": [
        [
          "@babel/preset-env"
        ],
        ["@babel/preset-react"]
      ],
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "ssr": true
          }
        ]
      ]
    }
  ]
}