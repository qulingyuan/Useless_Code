//手写instanceof
function myInstanceof(left, right) {
  if (typeof left !== "object" || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

//验证
console.log(myInstanceof(new Number(123), Number)); //true
console.log(myInstanceof(123, Number)); //false

//下面代码结果相同
console.log(Object.getPrototypeOf(new String("1234")));
console.log(new String("1234").__proto__);
console.log(String.prototype);
