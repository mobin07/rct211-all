import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteData, getData } from "../Redux/action";
import {Link as RouteLink} from "react-router-dom";
import { DELETE_COUNTRY_SUCCESS } from "../Redux/actionTypes";

const Homepage = () => {
const dispatch=useDispatch();
const countries=useSelector((state)=>state.countries);
let newData=countries;
console.log(newData)
const [sort,setSort]=useState(newData)
console.log(sort);

const getDataHandle=()=>{
dispatch(getData());
}

useEffect(()=>{
  if(newData.length===0)
  {
    getDataHandle()
  }
},[newData])


const handleDelete=(id)=>{
  dispatch(deleteData(id)).then(res=>{
    if(res.type===DELETE_COUNTRY_SUCCESS)
    {
      dispatch(getData());
    }
  })
  }
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc"  >
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc" >
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
          {sort.map((item)=>{
            return <Tr>
              <Td>{item.country}</Td>
              <Td>{item.city}</Td>
              <Td>{item.population}</Td>
              <Td><RouteLink to={`/country/${item.id}`}><Button colorScheme={"blue"}  >Edit</Button></RouteLink></Td>
              <Td><Button colorScheme={"red"} onClick={()=>handleDelete(item.id)} >Delete</Button></Td>
            </Tr>
          })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
