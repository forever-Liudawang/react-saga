import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import reducer from "./reducer"
import sagaTask from "./sagaTask"
const sagaMid = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMid,logger));

sagaMid.run(sagaTask)
window.store = store
export default store