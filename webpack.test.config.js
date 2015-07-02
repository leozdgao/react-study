module.exports = {
	entry: './test/main.js',
	output: {
		path: './test',
		filename: "app.bundle.js"
	},
	externals: {
		'react': 'React',
		'react-router': 'ReactRouter'
	},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
};
