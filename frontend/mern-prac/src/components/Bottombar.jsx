import { PlusSquareIcon } from '@chakra-ui/icons'
import { Container, Flex,Text,Button,HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <Container 
      bgGradient = {"linear(to-r,gray.700,Black)"}
      
   >
    <Flex
    padding = {10}
    h = {16}
    alignItems = "center"
    justifyContent={"space-between"}
    flexDir= {{
        base:"column",
        sm:"row"
    }}
    >
    
    
    <HStack spacing = {20} alignItems = {"center"}>
        <Link to = {"/create"}>
        <Button>
            
        </Button>
        </Link>
        </HStack>



    </Flex>
   </Container>
  )
}

export default Navbar
