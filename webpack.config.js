module.exports = {
	entry: './todoapp/src/main.js',
	output: {
		path: './todoapp',
		filename: "app.bundle.js"
	},
	externals: {
		react: 'React'
	}
};