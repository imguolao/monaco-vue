import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'

const commonPlugins = [
  nodeResolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  babel({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: ['> 2%, not dead', 'not IE 11'],
        },
      ],
      '@babel/preset-typescript',
    ],
    babelHelpers: 'bundled',
  }),
]

const external = ['@monaco-editor/loader', 'vue', 'vue-demi', /node_modules/]
const globalsForUMD = {
  '@monaco-editor/loader': 'monaco_loader',
  'vue-demi': 'VueDemi',
  vue: 'Vue',
}

export default [
  {
    input: 'src/index.ts',
    external,
    output: {
      exports: 'named',
      dir: 'lib/cjs/',
      format: 'cjs',
    },
    plugins: commonPlugins,
  },
  {
    input: 'src/index.ts',
    external,
    output: {
      exports: 'named',
      dir: 'lib/es/',
      format: 'es',
    },
    plugins: commonPlugins,
  },
  {
    input: 'src/index.ts',
    external,
    output: {
      exports: 'named',
      file: 'lib/umd/monaco-vue.js',
      format: 'umd',
      globals: globalsForUMD,
      name: 'monaco_vue',
    },
    plugins: commonPlugins,
  },
  {
    input: 'src/index.ts',
    external,
    output: {
      exports: 'named',
      file: 'lib/umd/monaco-vue.min.js',
      format: 'umd',
      globals: globalsForUMD,
      name: 'monaco_vue',
    },
    plugins: [
      ...commonPlugins,
      terser({
        mangle: false,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [
      dts({
        compilerOptions: {
          preserveSymlinks: false,
        },
      }),
    ],
  },
]
