import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { useSelector} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getData, updateData } from "../Redux/action";
import { UPDATE_COUNTRY_SUCCESS } from "../Redux/actionTypes";
import {useNavigate} from 'react-router-dom';




export const Editpage = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  const countries=useSelector((state)=>state.countries);
  let data=countries.filter(item=>item.id===Number(id));
  data=data[0];
  const dispatch=useDispatch()
  const [city,setCity]=useState(data?.city);
  const [population,setPopulation]=useState(Number(data?.population));





useEffect(()=>{
if(countries.length===0)
{
  dispatch(getData())
}
},[countries,dispatch])

const handleUpdate=()=>{
  let payload={
    city:city,
    population:population
  }
  dispatch(updateData(Number(id),payload)).then(res=>{
    if(res.type===UPDATE_COUNTRY_SUCCESS)
    {
      dispatch(getData());
    }
    navigate('/' ,{replace:"true"})
  })
}

  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={city} onChange={(e)=>setCity(e.target.value)} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" value={population} onChange={(e)=>setPopulation(e.target.value)} />
      </Box>
      <Button data-cy="update-button"  onClick={handleUpdate} >Update</Button>
    </Box>
  );
};

export default Editpage;
