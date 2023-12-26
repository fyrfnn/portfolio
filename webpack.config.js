const { resolve } = require('node:path');

const HTML = require('html-webpack-plugin');

const env = () => {
    return process.env['NODE_ENV'] === 'production'
        ? 'production'
        : 'development';
};

const isDev = env() === 'development';
const isProd = env() === 'production';
const name = isDev ? '[name]' : '[contenthash].min';

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: env(),
    entry: resolve(__dirname, 'app/App.tsx'),
    devtool: isProd ? false : 'source-map',
    output: {
        path: resolve(__dirname, 'build/static'),
        filename: `js/${name}.js`,
        clean: isProd
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 8000,
        hot: true
    },
    plugins: [
        new HTML({ template: resolve(__dirname, 'templates/index.html') })
    ]
};
