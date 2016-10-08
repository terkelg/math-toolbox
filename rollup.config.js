import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/math-toolbox.js',
  plugins: [ babel() ],
  moduleName: 'MathToolbox',
  targets: [
      { format: 'cjs', dest: 'dist/math-toolbox.cjs.js' },
      { format: 'umd', dest: 'dist/math-toolbox.umd.js' },
      { format: 'es', dest: 'dist/math-toolbox.es.js' }
  ],
  sourceMap: false
}
