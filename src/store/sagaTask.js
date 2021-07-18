
import {take,takeEvery,all,put,call,select} from "redux-saga/effects"
import {decrease,increase,logger} from "./reducer"
/**
 * 当saga发现yield 等待的是一个Promise对象 会自动等待该promise完成
 * [阻塞]take指令只监听一次 返回一个完整的action对象 下次触发action无法监听到 while(true) 持续监听
 * [阻塞]all指令接收一个生成器数组，每个都是生成器函数 必须等到所有项运行结束才会结束
 * [不阻塞]takeEvery 永远不会结束会一直监听action 
 * 不阻塞 put相重新触发一个action 
 * call,apply 调用回调函数 可传入this
 * select 获取仓库中的所有数据 可传入回调函数对仓库数据进行过滤
 */ 


 function *y1 (){
    yield 1;
 }
 function *y2(){
    yield take(decrease)
 }

 function *y3(){
    console.log("y3=====>>>")
   yield put({type:logger})
   yield call(()=>{
      setTimeout(() => {
            console.log("call")
      }, 1000);
   })
   const store = yield select()
   console.log("store",store)
 }
export default function *sagaTask(){
    // while(true){
    //     const res = yield take(decrease)
    //     console.log('res :>> ', res);
    // }


    // yield all([y1(),y2()])
    // console.log("end")
    yield takeEvery(increase,y3)


}   