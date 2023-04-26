const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 
module.exports = { 
    entry: 'src/index.js',
    mode: 'development', 
    output: { 
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    watch: true,
    watchOptions: {
        poll: 1000,
    },
    target: 'web', 
    devServer: { 
        port: '5000', 
        static: { 
            directory: path.join(__dirname, 'public') 
        }, 
        open: true, 
        hot: true, 
        liveReload: true
    }, 
    resolve: { 
        extensions: ['.js', '.jsx', '.json']
    }, 
    module: { 
        rules: [{
            test: /\.js$|jsx/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            loader: "css-loader",
            options: {
                url: true,
            }
        },
        {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                }
              }
            ]
        }
    ] 
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ] 
};
