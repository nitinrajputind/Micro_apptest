const HtmlWebpackPlugin = require('html-webpack-plugin')
const moduleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode : 'development',
    devServer : {
        port : 8081
    },
    plugins : [
        new moduleFedrationPlugin({
            name : 'products',
            filename : "remoteEntry.js",
            exposes : {
                "./ProductsIndex" : "./src/bootstrap",
            },
            // shared : {
            //     faker : {
            //         singleton : true
            //     }
            // }
            shared : ['faker']
        }),
        new HtmlWebpackPlugin({
            template : "./public/index.html",
        })
    ]
}