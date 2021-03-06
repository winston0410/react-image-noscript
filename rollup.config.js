const {
  terser
} = require('rollup-plugin-terser')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const {
  babel
} = require('@rollup/plugin-babel')

export default [{
  input: './src/index.js',
  external: ['react'],
  output: [{
    exports: 'auto',
    file: 'dist/esm/index.mjs.js',
    format: 'esm',
    plugins: [
      // terser({
      //   output: {
      //     comments: false
      //   },
      //   ecma: 2019
      // })
    ]
  },
  {
    exports: 'auto',
    file: 'dist/cjs/index.cjs.js',
    format: 'cjs',
    plugins: [
      // terser({
      //   output: {
      //     comments: false
      //   },
      //   ecma: 2019
      // })
    ]
  }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true
    }),
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}]
