const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge.smart(baseWebpackConfig, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: { config: { path: './postcss.config.js' } }
                    },
                    'sass-loader'
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ]
});