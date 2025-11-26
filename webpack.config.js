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
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: false,
};
