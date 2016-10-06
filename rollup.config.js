import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/math-toolbox.js',
  format: 'umd',
  moduleName: 'MathToolbox',
  plugins: [ babel() ],
  dest: 'dist/math-toolbox.js'
}
