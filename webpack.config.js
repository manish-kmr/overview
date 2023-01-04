const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		overviewApp: path.resolve( process.cwd(), 'src', 'OverviewApp.js' ),
		intradayApp: path.resolve( process.cwd(), 'src', 'IntradayApp.js' ),
		dailyPriceApp: path.resolve( process.cwd(), 'src', 'DailyPriceApp.js' ),
	},
};
