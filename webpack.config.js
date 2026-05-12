const nodeExternals = require('webpack-node-externals');

module.exports = function (options) {
  return {
    ...options,
    // This is the "magic" part: 
    // By default, Nest excludes everything in node_modules. 
    // We override this to bundle them IN.
    externals: [
      nodeExternals({
        allowlist: [
          /^swagger-ui-dist/,
          /^swagger-ui-express/,
        ],
      })
    ]
  };
};