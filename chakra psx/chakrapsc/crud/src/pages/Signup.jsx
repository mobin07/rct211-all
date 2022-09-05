import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { register } from "../Redux/AuthReducer/action";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/type";

const reducer=(state,{type,payload})=>{
switch(type){
  case "name":{
    return {...state,name:payload}
  }
  case "username":{
    return {...state,username:payload}
  }
  case "password":{
    return {...state,password:payload}
  }
  case "mobile":{
    return {...state,mobile:payload}
  }
  case "email":{
    return {...state,email:payload}
  }
  case "description":{
    return {...state,description:payload}
  }
  default:{
    return state;
  }
}
}

const initState={
  name:"",
  username:"",
  email:"",
  password:"",
  mobile:0,
  description:""
};




export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
const [state,SetDispatch]=useReducer(reducer,initState);
const navigate=useNavigate();

const dispatch=useDispatch()
const handleClick=()=>{
   dispatch(register(state)).then(r=>{
    if(r.type===REGISTER_SUCCESS){
      navigate("/login" , {replace:true})
    }
   })
}

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" value={state.name}  onChange={(e)=>SetDispatch({type:"name",payload:e.target.value})} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="userName">
                  <FormLabel>Username</FormLabel>
                  <Input type="text" value={state.username} onChange={(e)=>SetDispatch({type:"username",payload:e.target.value})}  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={state.email} onChange={(e)=>SetDispatch({type:"email",payload:e.target.value})}  />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} value={state.password} onChange={(e)=>SetDispatch({type:"password",payload:e.target.value})}  />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {/* <FormControl id="" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl> */}
            <Box>
              <FormControl id="number" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input type="number" value={state.mobile} onChange={(e)=>SetDispatch({type:"mobile",payload:e.target.value})}  />
              </FormControl>
            </Box>
            <Box>
              <Editable defaultValue="description">
                <EditablePreview />
                <EditableTextarea value={state.description} onChange={(e)=>SetDispatch({type:"description",payload:e.target.value})}  />
              </Editable>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button
              onClick={handleClick}

                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
