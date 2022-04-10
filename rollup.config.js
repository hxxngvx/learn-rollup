import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import eslint from "@rollup/plugin-eslint";
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/scripts/main.js',
  output: {
    file: 'build/js/main.min.js',
    format: 'iife',
    sourcemap: 'inline',
  },
  plugins: [
    nodeResolve({
      mainFields: ["jsnext:main", "main", "browser"]
    }),
    commonjs(),
    eslint({ exclude: 'src/styles/**' }),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' })
  ]
}
