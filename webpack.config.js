const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const currentDir = __dirname

module.exports = {
	context: currentDir,
	entry: './src/js/app.js',
	output: {
		path: path.resolve(currentDir, 'dist'),
		filename: 'js/[name].js'
	},
	devServer: {
		port: 3001,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'index',
			template: 'index.html',
			date: new Date()
		}),
		new webpack.DefinePlugin({
		  'process.env': {
		    NODE_ENV: JSON.stringify('production')
		  }
		}),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(currentDir,'node_modules')
				],
				include: [
					path.resolve(currentDir,'src/js')
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["env","react"]
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'	
					},
					{
						loader: 'css-loader?importLoaders=1'
				 	},	
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')(),
								require('cssnano')()
							]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'	
					},
					{
						loader: 'css-loader',
						options:{
							minimize: true
						}
					 },
					 {
						 loader: 'sass-loader'
					 },
					 {
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')(),
								require('cssnano')()
							]
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	}
}	