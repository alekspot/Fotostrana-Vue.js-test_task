const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

module.exports = merge.smart(baseWebpackConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 9000,
        hot: true
    }
});