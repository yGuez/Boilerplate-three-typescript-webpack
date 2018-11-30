var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/app.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },

      plugins: [
        new HtmlWebpackPlugin({
                template: './app/index.html'
            })
      ],
}
