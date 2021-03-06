const path = require('path')

module.exports = {
	entry: path.resolve('index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	},
	externals: [
		'react'
	]
}
