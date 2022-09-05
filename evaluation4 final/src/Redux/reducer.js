import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS } from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case GET_COUNTRIES_SUCCESS:{
      return {...state,countries:payload,isLoading:false}
    }
    case GET_COUNTRIES_REQUEST:{
      return {...state,isLoading:true};
    }
   
    case GET_COUNTRIES_FAILURE:{
      return {...state,isLoading:false,isError:true}
    }
  }
  return state;
};
