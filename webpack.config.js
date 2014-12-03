var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    stats: {
        colors: true,
        reasons: true
    },
    output: {
        filename: 'genepage.js',
        path: './build',
    },
    entry: [
        './src/scripts/app.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'react-hot!jsx-loader?harmony'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            { test: /\.woff$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css']
    },
    plugins: [
        new webpack.ProvidePlugin({ jQuery: "jquery" }),
        new HtmlWebpackPlugin({template: 'src/template/index.html'})
    ]
};

