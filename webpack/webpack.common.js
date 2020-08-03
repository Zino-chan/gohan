

module.exports = {
    entry: {
        vendor: "./src/js/vendor.js",
        components: "./src/js/components.js",
        main: "./src/js/main.js"
    },

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.(svg|jpg|gif|png|jpeg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                        publicPath: 'images'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'fonts',
                        publicPath: 'fonts'
                    }
                }
            }
        ]
    }
};