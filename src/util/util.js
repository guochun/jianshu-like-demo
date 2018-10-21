export  function  deepCopy(target) {

  if(typeof target !== 'object') return target;
  if(Array.isArray(target)) {
    return [...target];
  }
  let obj = {};
  let propertyNames = Object.getOwnPropertyNames(target);
  for(let name of propertyNames) {
    obj[name] = deepCopy(target[name])
  }

  return obj;
}