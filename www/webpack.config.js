var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./js/main.js']
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"},
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ],
        resolve: {
            extensions: ['', 'js', 'styl']
        }
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    },
    plugins: []
}
