/*global libde265:false */

'use strict';

function canPlayH264() {
  var v = document.createElement('video');
  return !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
}
