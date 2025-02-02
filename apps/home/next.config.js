const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            pricing:
              "pricing@https://monorepopricing.vercel.app/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            // "./home": "/pages/index.js", //home also exposed for pricing
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
