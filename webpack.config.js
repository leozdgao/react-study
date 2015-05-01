module.exports = {
	entry: './study/src/main.js',
	output: {
		path: './study',
		filename: "app.bundle.js"
	},
	externals: {
		react: 'React'
	}
};