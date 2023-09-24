const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/, 
            use: [
                MiniCSSExtractPlugin.loader, 'css-loader',
            ],
        }],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
    ],
    
    };
    