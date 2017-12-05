import { resolve } from 'path';
const debug = require('debug')('umi:dev');

export default function(opts = {}) {
  const { extraResolveModules } = opts;
  debug(`opts: ${JSON.stringify(opts)}`);
  delete opts.extraResolveModules;

  return require('umi-build-dev/lib/dev').default({
    babel: resolve(__dirname, '../babel'),
    enableCSSModules: true,
    extraResolveModules: [
      ...(extraResolveModules || []),
      resolve(__dirname, '../../node_modules'),
    ],
    ...opts,
  });
}

export { fork } from 'umi-build-dev/lib/dev';
