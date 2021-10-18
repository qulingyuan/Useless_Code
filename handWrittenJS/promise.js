//手写 promise
class Commitment {
  static PEDDING = "待定";
  static FULLFILLED = "成功";
  static REJECTED = "失败";
  constructor(func) {
    this.status = Commitment.PEDDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(result) {
    setTimeout(() => {
      if (this.status === Commitment.PEDDING) {
        this.status = Commitment.FULLFILLED;
        this.result = result;
        this.resolveCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === Commitment.PEDDING) {
        this.status = Commitment.REJECTED;
        this.result = result;
        this.resolveCallbacks.forEach((callback) => {
          callback(result);
        });
      }
    });
  }
  then(onFullFilled, onRejected) {
    return new Commitment((resolve, reject) => {
      onFullFilled =
        typeof onFullFilled === "function" ? onFullFilled : () => {};
      onRejected = typeof onRejected === "function" ? onRejected : () => {};
      if (this.status === Commitment.PEDDING) {
        this.resolveCallbacks.push(onFullFilled);
        this.rejectCallbacks.push(onRejected);
      }
      if (this.status === Commitment.FULLFILLED) {
        setTimeout(() => {
          onFullFilled(this.result);
        });
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onRejected(this.result);
        });
      }
    });
  }
}
console.log("第一步");
let commitment = new Commitment((resolve, reject) => {
  console.log("第二步");
  setTimeout(() => {
    resolve("成功了");
    reject("失败了");
    console.log("第四步");
  });
});
commitment
  .then(
    (result) => {
      console.log(result);
    },
    (result) => {
      console.log(result.message);
    }
  )
  .then(
    (result) => {
      console.log(result);
    },
    (result) => {
      console.log(result.message);
    }
  );
console.log("第三步");
