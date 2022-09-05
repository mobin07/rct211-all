import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
const [searchParams,setSearchParams]=useSearchParams();


const isAuth=useSelector((state)=>state.auth.isAuth);
const task=useSelector((state)=>state.app.task);
const personalTasks=task.filter((item)=>item.tags.includes("Personal"));
const otherTasks=task.filter((item)=>item.tags.includes("Others"));
const officialTasks=task.filter((item)=>item.tags.includes("Official"));

const [selectedTag,setSelectedTag]=useState(searchParams.getAll("tag") || []);

const handleTagChange=(tag)=>{
let newSelectedTag=[...selectedTag];
if(selectedTag.includes(tag)){
    newSelectedTag.splice(newSelectedTag.indexOf(tag),1);
}else{
    newSelectedTag.push(tag);
}
setSelectedTag(newSelectedTag);
};

useEffect(()=>{
    if(selectedTag){
        setSearchParams({tag:selectedTag});
    }
},[setSearchParams,selectedTag]);






  return (
    <Box border={"1px solid red"} width="250px" height="100vh">
      <Stack direction="column">
        <Box height={"15vh"} border="1px solid blue"></Box>
        <Box height={"70vh"} border="1px solid blue">
        <Flex direction={"column"} gap="5px" margin="5px" >
        <Box border={"1px solid black"} padding="5px 0" 
        cursor={"pointer"} bg={selectedTag.includes("All") ? "blue.400":"blue.100"}
         onClick={()=>handleTagChange("All")}>
            <Flex >
              <Text>All</Text>
              <Text marginLeft={"auto"}>{task.length}</Text>
            </Flex>
          </Box>
          <Box border={"1px solid black"} padding="5px 0" cursor={"pointer"} bg={selectedTag.includes("Personal") ? "green.400":"green.100"} onClick={()=>handleTagChange("Personal")}>
            <Flex>
              <Text>Personal</Text>
              <Text marginLeft={"auto"}>{personalTasks.length}</Text>
            </Flex>
          </Box>
          <Box border={"1px solid black"} padding="5px 0" cursor={"pointer"} bg={selectedTag.includes("Official") ? "purple.400":"purple.100"} onClick={()=>handleTagChange("Official")} >
            <Flex>
              <Text>Official</Text>
              <Text marginLeft={"auto"}>{officialTasks.length}</Text>
            </Flex>
          </Box>
          <Box border={"1px solid black"} padding="5px 0" cursor={"pointer"} bg={selectedTag.includes("Others") ? "orange.400":"orange.100"} onClick={()=>handleTagChange("Others")} >
            <Flex>
              <Text>Other</Text>
              <Text marginLeft={"auto"}>{otherTasks.length}</Text>
            </Flex>
          </Box>
        </Flex>
        </Box>
        <Box height={"10vh"} border="1px solid blue">
          <Button width={"100%"}>LOGOUT</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
