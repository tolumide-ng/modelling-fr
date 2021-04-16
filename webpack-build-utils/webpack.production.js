const TerserJSplugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    optimization: {
        minimizer: [new TerserJSplugin({}), new OptimizeCssAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1, modules: true },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(css|scss|sass)/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1, modules: true },
                    },
                    "sass-loader",n
                ],
            },
        ],
    },
};
