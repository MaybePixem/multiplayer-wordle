module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'eslint:recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		"arrow-spacing": "error",
		"comma-dangle": ["warn", "only-multiline"],
		"no-alert": "error",
		"no-console": "warn",
		"no-multi-spaces": "warn",
		"no-undef": "error",
		"no-unreachable": "warn",
		"no-unused-vars": "error",
		"quotes": ["warn", "double", { "avoidEscape": true }],
		"semi": ["warn", "always"],
	}
}
