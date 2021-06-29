/*
 * @Author: Sunly
 * @Date: 2021-06-28 19:01:39
 * @LastEditTime: 2021-06-28 19:03:36
 * @LastEditors: Sunly
 * @Description: eslint 配置
 * @FilePath: \moyoo\.eslintrc.js
 */
module.exports = {
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser", // Specifies the ESLint parser
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		"prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		"plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	rules: {}
};
