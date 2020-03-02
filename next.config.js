const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(withSass(withOptimizedImages(
    {
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        },

        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            });
            return config
        }
    }
)));