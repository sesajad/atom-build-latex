'use babel';

import { EventEmitter } from 'events';

// Package settings
import fs from 'fs';

import compilers from '../spec/compilers.js';
import {configWrapper} from './config.js';

export default function() {
  return class LaTeXProvider extends EventEmitter {

    registerCallbacks() {
      refreshFunc = (any) => this.emit("refresh");
      this._disposable = [
        atom.workspace.observeActiveTextEditor(refreshFunc),
        configWrapper.observe('defaultCompiler', refreshFunc),
        ];
    }

    constructor(cwd) {
      super();
      this.cwd = cwd;
      this.registerCallbacks();
    }

    unregisterCallbacks() {
      for (d in this._disposable)
        d.dispose()
    }

    destructor() {
      this.unregisterCallbacks()
    }

    getNiceName() {
      return 'LaTeX';
    }

    isEligible() {
      return fs.readdirSync(this.cwd).some(file => file.endsWith('tex'));
    }

    settings() {
      if (atom.workspace.getActiveTextEditor() != null &&
        !atom.workspace.getActiveTextEditor().getTitle().endsWith('tex'))
        return [];

      const defaultCompiler = compilers.list[configWrapper.get('defaultCompiler')];
      s = [
        Object.assign({}, defaultCompiler, {name : defaultCompiler.name + ' (Default)'}),
        ...Object.values(compilers.list).filter(val => val != defaultCompiler)
      ];
      console.log(s);
      return s;
    }
  };
}
