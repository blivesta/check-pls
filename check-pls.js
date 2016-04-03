(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.checkPls = factory()
  }
})(this, function () {
  var CheckPls = function (element, type) {
    var PORTRAIT = 'portrait'
    var LANDSCAPE = 'landscape'
    var SQUARE = 'square'

    var e = element || {}
    var t = type || ''
    var h = e.clientHeight
    var w = e.clientWidth
    var n = (w === 0 && h === 0 || h === undefined)
    var p = (h > w)
    var l = (h < w)
    var s = (h === w && !n)
    var pls

    if (t) {
      if ((t === PORTRAIT && p) || (t === LANDSCAPE && l) || (t === SQUARE && s)) {
        pls = true
      } else {
        pls = false
      }
    } else {
      if (p) {
        pls = PORTRAIT
      } else if (l) {
        pls = LANDSCAPE
      } else if (s) {
        pls = SQUARE
      }
    }

    return pls
  }

  return CheckPls
})
