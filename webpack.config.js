const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000
    },
    watch: true
};