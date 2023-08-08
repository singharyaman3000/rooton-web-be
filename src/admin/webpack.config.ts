"use strict";

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = (config: any) => {
  config.plugins.push(new MonacoWebpackPlugin());
  return config;
};
