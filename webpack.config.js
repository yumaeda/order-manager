const path = require('path')
const MODE = 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [{
    mode: MODE,
    entry: './src/index.tsx',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'components': path.resolve(__dirname, 'src/components')
        },
        extensions: [ '.ts', '.tsx', '.js', '.json' ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        static: {
            directory: __dirname
        }
    },
    output: {
        filename: 'index.min.js',
        path: __dirname
    }
},
{
    mode: MODE,
    entry: './scss/index.scss',
    output: {
        filename: 'index.css',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
}]
