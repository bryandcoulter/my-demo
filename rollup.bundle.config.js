import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

/** @type {import('@rollup/plugin-babel').RollupBabelInputPluginOptions} */
const babelConfig = {
  babelHelpers: 'bundled',
  include: [
    'src/**',
    'node_modules/lit-element/**',
    'node_modules/lit-html/**',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
      },
    ],
  ],
};

export default [
  {
    input: './bundle-deps.js',
    output: {
      name: 'my-web-components',
      file: 'dist/my-web-components.js',
      format: 'umd',
    },
    plugins: [babel(babelConfig), nodeResolve(), terser()],
  },
];
