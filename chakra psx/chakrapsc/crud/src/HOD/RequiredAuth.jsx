import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";



export const RequiredAuth=({children})=>{
const isAuth=useSelector((state)=>state.auth.isAuth);
const location=useLocation();

if(!isAuth){
    console.log(location)
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

return children;
}