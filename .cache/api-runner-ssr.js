var plugins = [{
      plugin: require('D:/Projects/Trash/antd/new_antd/old_docs/node_modules/gatsby-mdx-fix/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".md",".mdx",".MD"],"gatsbyRemarkPlugins":["gatsby-remark-external-links",{"resolve":"D:\\Projects\\Trash\\antd\\new_antd\\old_docs\\node_modules\\antdsite\\lib\\plugins\\gatsby-remark-header-custom-ids\\index.js"},{"resolve":"D:\\Projects\\Trash\\antd\\new_antd\\old_docs\\node_modules\\antdsite\\lib\\plugins\\gatsby-remark-img-warpper-p\\index.js"},{"resolve":"D:\\Projects\\Trash\\antd\\new_antd\\old_docs\\node_modules\\antdsite\\lib\\plugins\\remark-default-class-name\\index.js"},{"resolve":"gatsby-remark-prismjs","options":{"inlineCodeMarker":">>>"}},{"resolve":"D:\\Projects\\Trash\\antd\\new_antd\\old_docs\\node_modules\\antdsite\\lib\\plugins\\gatsby-remark-ant-alert\\index.js","pluginOptions":{"info":[{"alias":"tip","defaultTitle":"Tip"},{"alias":"tip-zh","defaultTitle":"提示"}],"warning":[{"alias":"warning","defaultTitle":"Warning"},{"alias":"warning-zh","defaultTitle":"警告"}],"error":[{"alias":"error","defaultTitle":"Caveat"},{"alias":"error-zh","defaultTitle":"严重警告"}]}}]},
    },{
      plugin: require('D:/Projects/Trash/antd/new_antd/old_docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/Projects/Trash/antd/new_antd/old_docs/node_modules/antdsite/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
