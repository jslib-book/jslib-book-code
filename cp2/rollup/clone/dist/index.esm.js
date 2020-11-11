/*!
 * clone 1.0.0
 * Licensed under MIT
 */

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

function clone(source) {
  var t = type(source);

  if (t !== "object" && t !== "array") {
    return source;
  }

  var target;

  if (t === "object") {
    target = {};

    for (var i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]); // 注意这里
      }
    }
  } else {
    target = [];

    for (var _i = 0; _i < source.length; _i++) {
      target[_i] = clone(source[_i]); // 注意这里
    }
  }

  return target;
}

export { clone };
