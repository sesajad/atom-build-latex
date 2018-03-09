'use babel';

import compilers from '../spec/compilers.js';
import meta from '../package.json';

export default {
  defaultCompiler: {
    title: 'Default Compiler',
    description: 'Specify your preferred compiler',
    type: 'string',
    default: compilers.defaultCompiler,
    enum: Object.keys(compilers.list),
    order: 0
  }
};

export const configWrapper = {
  observe: (key, callback) => atom.config.observe(meta.name + '.' + key, callback),
  get: (key) => atom.config.get(meta.name + '.' + key),
};
