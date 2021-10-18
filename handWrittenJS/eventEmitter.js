class myEventEmitter{
    constructor(){
        //eventMap用来存储事件和监听函数之间的联系
        this.eventMap = {};
    }
    //type这里就代表事件的名称
    on(type,handler){
        //handler必须是函数
        if(!(handler instanceof Function)){
            throw new Error("请传入一个函数");
        }
        //判断type事件对应的队列是否存在
        if(!this.eventMap[type]){
            //若不存在，新建该队列
            this.eventMap[type] = [];
        }
        //若存在，直接往队列里推入handler
        this.eventMap[type].push(handler);
    }
    //触发时是可以携带数据的，params就是数据的载体
    emit(type,params){
        //假设该事件是有订阅的(对应的事件队列存在)
        if(this.eventMap[type]){
            //将事件队列里的handler依次执行出队
            this.eventMap[type].forEach((handler,index)=>{
                //注意别忘了读取params
                handler(params);
            })
        }
    }
    off(type,handler){
        if(this.eventMap[type]){
            this.eventMap[type].splice(this.eventMap[type].indexOf(handler)>>>0,1)
        }
    }
}

const myEvent = new myEventEmitter();
const testHandler = function (params){
    console.log(`test事件触发了，testHandler接收到的入参是${params}`);
}
myEvent.on("test",testHandler);
myEvent.emit("test","newState");