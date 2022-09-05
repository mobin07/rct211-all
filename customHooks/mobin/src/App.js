// import  { useEffect, useState } from 'react'
import './App.css';
import useFetch from './hooks/useFetch';
import {UseTimeOut} from './hooks/UseTimeOut';
function App() {
const ready =UseTimeOut();

const [loading,error,data]=useFetch("https://reqres.in/api/users?page=2");


  return (
    <div className="App">
      <div>{ready ? "true":"false"}</div>
    <div>
      {loading && <div>loading...</div>}
      {error && <div>Error...</div>}
      {data?.map(item=> <div key={item.id} >{item.first_name}</div>
      )}
    </div>


    </div>
  );
}

export default App;
