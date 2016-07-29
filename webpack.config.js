const DIR = __dirname;

module.exports = {
    entry: DIR + '/src/entry.js',
    output: {
        path: DIR + '/src/assets/bundle/',
        filename: 'bundle.js',
        publicPath: './assets/bundle/'
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {limit: 10000, name: '[name].[ext]?[hash]'}
            }
        ]
    }
};

