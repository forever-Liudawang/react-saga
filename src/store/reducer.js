
export const increase = "increase"
export const decrease = "decrease"
export const logger = "logger"
const initState = {num:100}
function reducer (state=initState,action){
    switch(action.type){
        case increase:
            return {...state,num:state.num+1}
        case decrease:
            return {...state,num:state.num-1}
        case logger:{
            console.log("logger")
            return {...state,num:state.num+1000}
        }
        default:
            return state;
    }
}
export default reducer;