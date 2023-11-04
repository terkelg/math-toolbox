import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

/**
 * @param {import('rollup').RollupOptions} config
 * @returns {import('rollup').RollupOptions}
 */
const bundle = (config) => ({
  ...config,
  input: 'src/math-toolbox.js',
  external: (id) => !/^[./]/.test(id)
})

export default [
  bundle({
    output: [
      {
        dir: 'dist',
        format: 'esm',
        exports: 'named',
        entryFileNames: '[name].js'
      },
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'named',
        entryFileNames: '[name].cjs'
      },
      {
        dir: 'dist',
        format: 'umd',
        name: 'math-toolbox',
        exports: 'named',
        entryFileNames: '[name].umd.cjs'
      }
    ]
  }),

  bundle({
    plugins: [
      esbuild({
        minify: true,
        banner: '/* math-toolbox - https://github.com/terkelg/math-toolbox */'
      })
    ],
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'MathToolbox',
      exports: 'named',
      entryFileNames: '[name].min.js'
    }
  }),

  bundle({
    plugins: [dts()],
    output: {
      dir: 'dist',
      format: 'es',
      exports: 'named'
    }
  })
]
