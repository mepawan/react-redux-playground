import {INCREASE, DECREASE, LAST_ACTION} from "./actions"
const initialState = {
    count:0,
    lastAction:''
}
const counterReducer = (state:initialState,action) => {
    switch(action.type){
        case INCREASE:
            return {
                ...state,count:state.count + 1
            }
            break;
        case DECREASE:
            return {
                ...state,count:state.count - 1
            }
            break;
        case LAST_ACTION:
            return{
                ...state,lastAction:action.payload
            }
            break;
        case default:
            return{state}
            break;
    }
}

export default counterReducer;