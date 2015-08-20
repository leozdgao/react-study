var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './test/main.js',
	output: {
		path: './test',
		filename: "app.bundle.js"
	},
	externals: {
		'react/addons': 'React',
		'react-router': 'ReactRouter'
	},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract('css-loader')
				// test: /\.less$/,
				// loader: ExtractTextPlugin.extract('style', "css!autoprefixer?browsers=last 2 versions!less")
			}
    ]
  },
	plugins: [
		new ExtractTextPlugin('style.css')
	],
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
};
// modules&localIdentName=[name]__[local]___[hash:base64:5]
