import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addSubTasks, deleteSubTasks, getTasks, updateTasks } from "../Redux/AppReducer/action";




const EditPage = () => {

  const { id } = useParams();
  const task = useSelector((state) => state.app.task);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskTags, setTaskTags] = useState([]);
  const [currentSubTask, setCurrentSubTask] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [checkbox, setCheckbox] = useState([]);
  const dispatch = useDispatch();

  const handleDelete=(title)=>{
    console.log(title);
    let newData=subTasks.filter((item)=>
      item.subTaskTitle !==title
    )
    dispatch(deleteSubTasks(id,{subTasks:newData})).then(()=>dispatch(getTasks()))
    }



const updateSubTaskStatus=(checkboxValue)=>{
let newData=subTasks.map((item)=>{
  
  if(checkboxValue.includes(item.subTaskTitle)){
    
return {...item,status:true}
  };
  return {...item,status:false}
})

dispatch(addSubTasks(id,{subTasks:newData})).then(()=>dispatch(getTasks()));
}



  const addSubTask = (e) => {
    e.preventDefault();
    if(currentSubTask){
const newSubTasks=[...subTasks,{subTaskTitle:currentSubTask,status:false}];

dispatch(addSubTasks(id,{
  subTasks:newSubTasks
})).then(()=>dispatch(getTasks()))
    }

  };

const handleUpdate=(type,value)=>{
if(type==="textAndDescription"){
    dispatch(updateTasks(id,{
        title:taskTitle,
        description:taskDescription
    })).then(()=>dispatch(getTasks()));
}else if(type==="taskStatus")
{
    dispatch(updateTasks(id,
        {
            tasks_status:value,
        })).then(()=>updateTasks())
}else if(type==="taskTads"){
  dispatch(getTasks(id,{
    tags:value
  })).then(()=>dispatch(getTasks()))
}
}





  useEffect(() => {
    if (task) {
      const currentTask = task.find((item) => item.id === Number(id));
      if (currentTask) {
        setTaskTitle(currentTask.title);
        setTaskDescription(currentTask.description);
        setTaskStatus(currentTask.task_status);
        setTaskTags(currentTask.tags);
        setSubTasks(currentTask.subTasks);
        let data = currentTask.subTasks
          .filter((item) => item.status && item.subTaskTitle)
          .map((item) => item.subTaskTitle);
        setCheckbox(data);
      }
    }
  }, [id, task]);

  useEffect(() => {
    if (task.length === 0) {
      dispatch(getTasks());
    }
  }, [task.length, dispatch]);

  return (
    <Box border="1px solid green" width="100%">
      <Flex justifyContent={"space-around"} mt="3vh" >
        <Box width="200px" height="90vh">
          <Box>
            <Stack>
              <Input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <Editable value={taskDescription}>
                <EditablePreview />
                <EditableTextarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </Editable>
              <Button onClick={() => {handleUpdate("textAndDescription")}}>Update</Button>
            </Stack>
          </Box>
          <RadioGroup value={taskStatus} onChange={(value)=>{{setTaskStatus(value);handleUpdate("taskStatus",value);}}
        } >
            <Stack direction={"column"}>
              <Radio value="todo">Todo</Radio>
              <Radio value="in-progess">In-Progess</Radio>
              <Radio value="done">Done</Radio>
            </Stack>
          </RadioGroup>
          <Text>Tags</Text>
          <CheckboxGroup
            value={taskTags}
            onChange={(value) => {setTaskTags(value);handleUpdate(taskTags,value)}}
            colorScheme="green"
          >
            <Stack spacing={[1, 5]} direction={["column"]}>
              <Checkbox value="Official">Official</Checkbox>
              <Checkbox value="Personal">Personal</Checkbox>
              <Checkbox value="Others">Others</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        {/* <Box border="1px solid black" width="250px" height="90vh">
        
        </Box> */}
        <Box border="1px solid blue" width="350px" height="90vh">
          <form onSubmit={addSubTask}>
            <Flex>
              <Input
                placeholder="add new subTask"
                value={currentSubTask}
                onChange={(e) =>setCurrentSubTask( e.target.value)}
              />
              <Button ml="0.5rem" type="submit">
                Add
              </Button>
            </Flex>
          </form>
          <Flex direction={"column"} >
            <CheckboxGroup
              value={checkbox}
              onChange={(value) =>{
                setCheckbox(value);
                updateSubTaskStatus(value);
              } }
            >
              {subTasks.length &&
                subTasks.map((item, index) => {
                  return (
                    <Flex  justifyContent={"space-between"} direction={"row"}>
                      <Checkbox key={index} size="md" value={item.subTaskTitle}>
                        {item.subTaskTitle}
                      </Checkbox>
                      <DeleteIcon cursor={"pointer"} onClick={()=>handleDelete(item.subTaskTitle)} />
                    </Flex>
                  );
                })}
            </CheckboxGroup>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditPage;
