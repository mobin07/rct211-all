// import { Box } from '@chakra-ui/react'
import {Box, Flex, Text} from '@chakra-ui/react';
import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Taskcard from '../Components/Taskcard';
import { getTasks } from '../Redux/AppReducer/action';



const HomePage = () => {
const [searchParams]=useSearchParams();


const {task}=useSelector((state)=>state.app);

const dispatch=useDispatch();
const getTaskHandler=useCallback(()=>{
  dispatch(getTasks());
},[dispatch]);

useEffect(()=>{
  if(task.length===0)
  {
    getTaskHandler();
  }
},[getTaskHandler,task.length])

const filterByParamsTag=(task)=>{
  
  const paramsTags=searchParams.getAll("tag");
  if(paramsTags.includes("All") || paramsTags.length===0 ){
    return task;
  }
  const data=task.tags.filter((tag)=>{
    if(paramsTags.includes(tag)){
      return true
    }else{
      return false
    }
 
  });
  if(data.length){
    return task
  }else{
    return false
  }
  }

  return (

  <Box border="1px solid green" width="100%" >
      <Flex justifyContent="space-evenly" direction="row" >
        <Box textAlign={"left"} width="250px" border="1px solid black" height="95vh">
          <Box ><Text textAlign={"center"}>Todo</Text>
          </Box>
          {
          task.length>0 && task.filter((item)=>item.task_status==="todo").filter(filterByParamsTag)
          .map((item)=>{
            return <Taskcard key={item.id} {...item} colorScheme="green"></Taskcard>
          })
        }
          
        
      
        </Box>
        <Box textAlign={"left"} width="250px" border="1px solid black" height="100vh">
          <Box >
          <Text textAlign={"center"}>IN-PROGRESS</Text>
          </Box>
          {
          task.length>0 && task.filter((item)=>item.task_status==="in-progress").filter(filterByParamsTag).map((item)=>{
            return <Taskcard key={item.id} {...item} colorScheme="yellow"></Taskcard>
          })
        }
          
        </Box>
        <Box textAlign={"left"} width="250px" border="1px solid black" height="100vh">
          <Box>
          <Text textAlign={"center"}>Done</Text>
          </Box>
          {
          task.length>0 && task.filter((item)=>item.task_status==="done").filter(filterByParamsTag).map((item)=>{
            return <Taskcard key={item.id} {...item} colorScheme="blue" ></Taskcard>
          })
        }
        </Box>
      </Flex>
    </Box>
 

    
  )
}

export default HomePage