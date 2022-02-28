import commonJS from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [nodePolyfills({ include: 'punycode' }), resolve(), commonJS(), json()]
};
