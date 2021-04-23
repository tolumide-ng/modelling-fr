const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config();

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        alias: {
            "@atoms": path.resolve(__dirname, "src/main/components/UI/atoms/"),
            "@molecules": path.resolve(
                __dirname,
                "src/main/components/UI/molecules/"
            ),
            "@organisms": path.resolve(
                __dirname,
                "src/main/components/UI/organisms/"
            ),
            "@templates": path.resolve(
                __dirname,
                "src/main/components/UI/templates/"
            ),
            "@pages": path.resolve(__dirname, "src/main/components/Pages/"),
            "@store": path.resolve(__dirname, "src/main/store/"),
            "@utils": path.resolve(__dirname, "src/main/utilities/"),
            "@imgs": path.resolve(__dirname, "src/main/assets/images/"),
            "@styles": path.resolve(__dirname, "src/main/assets/styles"),
        },
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css",
        }),
        new webpack.DefinePlugin({
            "process.env": {
                BASE_URL: JSON.stringify(process.env.BASE_URL),
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/, /\.test.tsx?$/, /\.spec.tsx?$/],
                use: "ts-loader",
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader",
            },
        ],
    },
};
