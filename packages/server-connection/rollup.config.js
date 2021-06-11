// rollup.config.js
// import { liveServer } from 'rollup-plugin-live-server'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const plugins = [
  terser({
    compress: {
      ecma: 2015,
      pure_getters: true,
    },
  }),
]

const config = {
  input: 'lib/index.ts',
  output: [
    {
      name: 'serverConnection',
      file: 'dist/serverConnection.min.js',
      format: 'iife', // umd cjs es iife
      exports: 'auto',
      // sourcemap: true,
      plugins,
    },
    {
      name: 'serverConnection',
      file: 'dist/serverConnection.cjs.js',
      format: 'cjs',
      plugins,
    },
    {
      name: 'serverConnection',
      file: 'dist/serverConnection.ems.js',
      format: 'esm',
      plugins,
    },
    {
      name: 'serverConnection',
      file: 'dist/serverConnection.umd.js',
      format: 'umd',
      plugins,
    },
  ],
  plugins: [
    resolve(),
    json(),
    commonjs({
      include: 'node_modules/**',
    }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    babel({
      exclude: '**/node_modules/**',
      extensions,
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
    }),
    // liveServer({
    //   port: 8090,
    //   host: '0.0.0.0',
    //   root: 'example',
    //   file: 'index.html',
    //   mount: [['/dist/wsHeartbeat.min.js', './dist/wsHeartbeat.min.js']],
    //   open: false,
    //   wait: 500,
    // }),
  ],
}
const dtsConfig = {
  input: 'lib/index.ts',
  output: [{ file: 'dist/serverConnection.d.ts', format: 'esm' }],
  plugins: [dts()],
}

export default [config, dtsConfig]
