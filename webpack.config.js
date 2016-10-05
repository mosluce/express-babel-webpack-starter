'use strict';

const webpack = require('webpack');
const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    entry: {
        'index': ['babel-polyfill', path.join(__dirname, 'src', 'index.js')]
    },

    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    target: 'node',
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.js', '.json']
    },

    externals: [externals()],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            '__dirname': JSON.stringify(__dirname)
        })
    ]
};