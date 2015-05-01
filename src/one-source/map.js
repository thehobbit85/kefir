import {createStream, createProperty} from '../utils/patterns/one-source';
import {VALUE} from '../utils/other';

const mixin = {

  _init({fn = (x => x)}) {
    this._fn = fn;
  },

  _free() {
    this._fn = null;
  },

  _handleValue(x, isCurrent) {
    this._send(VALUE, this._fn(x), isCurrent);
  }

};

export const MapStream = createStream('map', mixin);
export const MapProperty = createProperty('map', mixin);
