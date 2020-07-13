module.exports = {
  overrides: [
    {
      test: ["./src/client"],
      "presets": [
        [
          "@babel/preset-env",
          {
            modules: false
          }
        ],
        ["@babel/preset-react"]
      ],
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "ssr": false
          }
        ]
      ]
    },
    {
      test: ["./src/server"],
      presets: [
        [
          "@babel/preset-env"
        ],
      ]
    }

  ]

}