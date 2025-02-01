const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "pricing",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@https://monorepohome.vercel.app/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./pricing-page": "./pages/index.js", //giving full project to the home form here
            "./pages-map": "./pages-map.js",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        })
      );
    }
    return config;
  },
};
