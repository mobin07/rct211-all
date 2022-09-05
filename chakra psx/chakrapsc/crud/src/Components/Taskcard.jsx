import { EditIcon } from '@chakra-ui/icons'
import { Badge, Box, Checkbox, CheckboxGroup, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {Link as RouteLink, useParams} from 'react-router-dom';
const Taskcard = ({id,title,description,tags,subTasks,colorScheme="green"}) => {
// const {id}=useParams();

  const [checkbox,setCheckBox]=useState(()=>{
    let data=subTasks.filter((item)=>{
      return item.status && item.subTaskTitle;
    }).map((item)=>item.subTaskTitle);
    return data;
  });
  
  
  return (
    <Box border={"1px solid red"} width={"230px"} margin="auto" padding="10px">
        <Flex justify={"space-between"} >
        <Text>{title}</Text>
        <RouteLink to={`/task/${id}`}><EditIcon/></RouteLink>
        </Flex>
        <Box>
            <Stack direction={"row"}>
                {tags.length && tags.map((item,index)=>{
                  return (
                    <Badge key={index} colorScheme={colorScheme}>{item}</Badge>
                  )
                })}
            </Stack>
        </Box>
        <Text>{description}</Text>
        <Box>
          <CheckboxGroup value={checkbox}>
            {subTasks.length && subTasks.map((item,index)=>{
              return <Checkbox key={index} size="md" value={item.subTaskTitle} >{item.subTaskTitle}</Checkbox>
            })}
          </CheckboxGroup>
        </Box>
    </Box>
  )
}

export default Taskcard