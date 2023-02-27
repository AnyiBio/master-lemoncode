const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", "ts", ".tsx"]
    },
    entry: {
        app: "./index.tsx",
        vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            scriptLoading: "blocking",
            favicon: "content/favicon.gif",
        }),
    ],
};
