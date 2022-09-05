import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link as RouterLink, useLocation, useNavigate} from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';
import { LOGIN_SUCCESS } from '../Redux/AuthReducer/type';
  export default function Login() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();

    const toPath=location?.state?.from?.pathname || '/';
const [userDetails,setUserDetails]=useState({
  username:"",
  password:""
})

const handleLogin=()=>{
  if(userDetails.username && userDetails.password)
  {
    dispatch(login(userDetails)).then(res=>{
      if(res.type===LOGIN_SUCCESS)
      {
        navigate(`${toPath}`,{replace:true})
      }
     
    })
  }
 
}



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>User Name</FormLabel>
                <Input type="text" value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button 
                onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account? <RouterLink to="/signup" color={'blue.400'}>Signup</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }