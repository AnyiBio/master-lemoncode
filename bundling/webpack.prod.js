const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { 
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                            },
                        }
                    },
                    "sass-loader"
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css"
        }),
        new Dotenv({
            path: "./dev.env"
        })
    ],
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    test: "/[\\/]node_modules[\\/]/",
                    enforce: true,
                }
            }
        }
    }
});
