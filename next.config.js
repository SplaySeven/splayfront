const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withSass(
	withCSS({
		target: 'serverless',
		webpack(config) {
			// Fixes npm packages that depend on `fs` module
			config.node = {
				fs: 'empty'
			};
			config.module.rules.push({
				test: /\.(jpg|png|svg|eot|otf|ttf|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						publicPath: '/imagenes/',
						outputPath: 'static/',
						name: '[name].[ext]'
					}
				}
			});
			return config;
		}
	})
);
