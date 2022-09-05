import axios from "axios";
import { ADD_SUBTASK_FAILURE, ADD_SUBTASK_REQUEST, ADD_SUBTASK_SUCCESS, DELETE_SUBTASKS_FAILURE, DELETE_SUBTASKS_REQUEST, DELETE_SUBTASKS_SUCCESS, GETTAST_FAILURE, GETTAST_REQUEST, GETTAST_SUCCESS, UPDATE_TASKS_FAILURE, UPDATE_TASKS_REQUEST, UPDATE_TASKS_SUCCESS } from "./type"

export const getTasks=()=>dispatch=>{
dispatch({type:GETTAST_REQUEST})
return axios.get("http://localhost:8080/posts").then(res=>dispatch({type:GETTAST_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GETTAST_FAILURE}));
}

export const updateTasks=(id,payload)=>(dispatch)=>{
dispatch({type:UPDATE_TASKS_REQUEST});
return axios.patch(`http://localhost:8080/posts/${id}`,payload).then(r=>dispatch({type:UPDATE_TASKS_SUCCESS,payload:r.data})).catch(e=>dispatch({type:UPDATE_TASKS_FAILURE}));
}

export const addSubTasks=(id,payload)=>(dispatch)=>{
dispatch({type:ADD_SUBTASK_REQUEST});
return axios.patch(`http://localhost:8080/posts/${id}`,payload).then(res=>dispatch({type:ADD_SUBTASK_SUCCESS,payload:res.data})).catch(e=>dispatch(({type:ADD_SUBTASK_FAILURE})))
}

export const deleteSubTasks=(id,payload)=>(dispatch)=>{
dispatch({type:DELETE_SUBTASKS_REQUEST});
return axios.patch(`http://localhost:8080/posts/${id}`,payload).then(r=>dispatch({type:DELETE_SUBTASKS_SUCCESS,payload:r})).catch(e=>dispatch({type:DELETE_SUBTASKS_FAILURE}))
}