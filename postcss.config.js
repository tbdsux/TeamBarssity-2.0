const whitelister = require('purgecss-whitelister')
const { resolve } = require('path')

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/*.js", "./pages/*.js"],
    whitelist: whitelister(
      "node_modules/@fortawesome/fontawesome-svg-core/styles.css"
  ),
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};