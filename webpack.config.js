import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    optimization: {
        minimize: false,
        concatenateModules: true
    },
    experiments: {
        outputModule: true
    },
    output: {
        library: {
	    type: 'module'
        },
        filename: 't.js',
        publicPath: '/dist'
    },
    node: { global: false },
    module: {
        rules: [{
            test: /\.styl$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'stylus-loader'
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 't.css'
        }),
    ]
};
