import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/vue-scroll-context.js',
	output: {
	  file: 'dist/vue-scroll-context.js',
	  format: 'cjs'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/**'
		})
	]
};