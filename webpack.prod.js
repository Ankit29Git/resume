const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        // Extracts CSS into separate files
        // Note: style-loader is for development, MiniCssExtractPlugin is for production
        new MiniCssExtractPlugin({
            filename: 'content/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
});