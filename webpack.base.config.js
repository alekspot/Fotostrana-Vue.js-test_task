const path = require('path');

const PATHS = {
    src: path.resolve(__dirname,'src'),
    build: path.resolve(__dirname,'build')
}

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode:'production',
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:'main.js',
        path: PATHS.build
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            {
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude:'/node_modules/'
            },

            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
            },
            
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Сборка проекта",
            template: "src/index.html"
        })
    ]
}