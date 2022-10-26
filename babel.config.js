module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "modules-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
