var webpack = require('webpack');
var os = require('os');

var ipAddr = os.networkInterfaces().eth0[0].address;
module.exports = {
    stats: {
        colors: true,
        reasons: true
    },
    output: {
        filename: 'genepage.js',
        path: __dirname,
        publicPath: '/js/'
    },
    entry: [
        'webpack-dev-server/client?http://' + ipAddr + ':9000',
        'webpack/hot/dev-server',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({ jQuery: "jquery" })
    ]
};

