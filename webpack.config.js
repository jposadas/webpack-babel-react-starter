var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, './src');
var WWW_DIR = path.resolve(__dirname, './www');

var config = {
    context: SRC_DIR,
    entry: './entry.js',
    output: {
        path: WWW_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [SRC_DIR],
                loaders: 'babel-loader'
            }
        ]
    }
};

module.exports = config;