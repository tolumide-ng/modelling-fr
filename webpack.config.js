const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (env) => {
    const envConfig = !env.mode
        ? require("./webpack-build-utils/webpack.development")
        : require(`./webpack-build-utils/webpack.${env.mode}`);

    return merge({ mode: env.mode }, commonConfig, envConfig);
};
