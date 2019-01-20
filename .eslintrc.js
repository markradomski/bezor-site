module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true
	},
	settings: {
		jsx: true
	},
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	extends: 'airbnb-base',
	rules: {
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': 0,
		'jsx-quotes': [1, 'prefer-double'],
		'class-methods-use-this': 0,
		'arrow-parens': 0,
		'eslint-disable-next-line': 0,
		indent: 0,
		'function-paren-newline': 0,
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-console': 0,
		'no-inline-comments': 0,
		'no-underscore-dangle': 0,
		'comma-dangle': 0,
		'max-len': 0
	}
};
