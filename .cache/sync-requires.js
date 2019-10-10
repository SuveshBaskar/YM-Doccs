const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-antdsite-src-templates-index-tsx": hot(preferDefault(require("D:\\Projects\\Trash\\antd\\new_antd\\my-docs\\node_modules\\antdsite\\src\\templates\\index.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Projects\\Trash\\antd\\new_antd\\my-docs\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Projects\\Trash\\antd\\new_antd\\my-docs\\src\\pages\\404.js")))
}

