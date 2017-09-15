const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const currentDir = __dirname
const ROOT = currentDir.replace(path.basename(currentDir),'');

module.exports = {
	context: ROOT,
	entry: {
		'main': './src/js/app.js',
		'a': './src/js/a.js'
	},
	output: {
		path: path.resolve(ROOT, 'dist'),
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
			date: new Date(),
			chunks:['a','main']
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
					path.resolve(ROOT,'node_modules')
				],
				include: [
					path.resolve(ROOT,'src/js')
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["env","stage-0","react"],
							plugins:['transform-runtime']
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
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader'	
			// 		},
			// 		{
			// 			loader: 'css-loader',
			// 			options:{
			// 				minimize: true
			// 			}
			// 		 },
			// 		 {
			// 			 loader: 'sass-loader'
			// 		 },
			// 		 {
			// 			loader: 'postcss-loader',
			// 			options: {
			// 				plugins: [
			// 					require('autoprefixer')(),
			// 					require('cssnano')()
			// 				]
			// 			}
			// 		}
			// 	]
			// },
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
			},
			{
				test: /\.json$/,
				use: [
					{
						loader: 'json-loader',
					}
				]
			}
		]
	}
}	