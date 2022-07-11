const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.join(path.resolve(__dirname, "./src/assets")),
      "@pages": path.join(path.resolve(__dirname, "./src/pages")),
      "@store": path.join(path.resolve(__dirname, "./src/store")),
      "@slices": path.join(path.resolve(__dirname, "./src/slices")),
      "@components": path.join(path.resolve(__dirname, "./src/components")),
    },
  },
};
