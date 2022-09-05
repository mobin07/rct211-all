import { ADD_SUBTASK_FAILURE, GETTAST_FAILURE, GETTAST_REQUEST, GETTAST_SUCCESS } from "./type"


const init={
    task:[],
    isLoading:false,
    isError:false
}

export const reducer =(state=init,{type,payload})=>{
    switch(type){
        case GETTAST_REQUEST:{
            return {...state,isLoading:true};
        }
        case GETTAST_SUCCESS:{
            return {...state,isLoading:false,task:payload}
        }
        case GETTAST_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
    }