export function printStatus(fn) {
  var name = fn.name;
  // @ts-ignore
  // @ts-nocheck
  // switch (%GetOptimizationStatus(fn)) {
  // case 1:
  //   console.log(fn.name, "function is optimized");
  //   break;
  // case 2:
  //   console.log(fn.name, "function is not optimized");
  //   break;
  // case 3:
  //   console.log(fn.name, "function is always optimized");
  //   break;
  // case 4:
  //   console.log(fn.name, "function is never optimized");
  //   break;
  // case 6:
  //   console.log(fn.name, "function is maybe deoptimized");
  //   break;
  // }
}

export function tracePrototypeChainOf(object) {

    var proto = object.constructor.prototype;
    var result = '';

    while (proto) {
        result += ' -> ' + proto.constructor.name + '.prototype';
        proto = Object.getPrototypeOf(proto)
    }
 
    result += ' -> null';
    return result;
}
