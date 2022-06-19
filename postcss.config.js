module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "color-mod-function": { unresolved: "warn" },
        "nesting-rules": true,
        "custom-media-queries": {
          preserve: false,
        },
        "custom-properties": {
          preserve: false,
        },
      },
    }),
    require("cssnano")({
      preset: `default`,
    }),
  ],
};
