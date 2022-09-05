import axios from "axios";
import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS ,
    UPDATE_COUNTRY_REQUEST,UPDATE_COUNTRY_FAILURE,UPDATE_COUNTRY_SUCCESS,
    DELETE_COUNTRY_REQUEST,DELETE_COUNTRY_FAILURE,DELETE_COUNTRY_SUCCESS

} from "./actionTypes";




export const updateData=(id,payload)=>(dispatch)=>{
    dispatch({type:UPDATE_COUNTRY_REQUEST});
    return axios.patch(`http://localhost:8080/countries/${id}`,payload).then(res=>dispatch({type:UPDATE_COUNTRY_SUCCESS,payload:res.data})).catch(err=>dispatch({type:UPDATE_COUNTRY_FAILURE}));
}
export const getData=()=>(dispatch)=>{
    dispatch({type:GET_COUNTRIES_REQUEST});
    axios.get("http://localhost:8080/countries").then(res=>dispatch({type:GET_COUNTRIES_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GET_COUNTRIES_FAILURE}));
    }

export const deleteData=(id)=>(dispatch)=>{
dispatch({type:DELETE_COUNTRY_REQUEST});
return axios.delete(`http://localhost:8080/countries/${id}`).then(res=>dispatch({type:DELETE_COUNTRY_SUCCESS,payload:res.data})).catch(err=>dispatch({type:DELETE_COUNTRY_FAILURE}));
}