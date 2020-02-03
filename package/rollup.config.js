import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';
import pkg from './package.json';

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "dist",
        format: "esm",
        exports: "named"
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependnencies || {})
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
      typescript({
        typescript: require('typescript'),
        tsconfig: "../tsconfig.json"
      }),
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        preferBuiltins: true
      }),
      external()
    ]
  }
];
