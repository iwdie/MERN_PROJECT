import { PlusSquareIcon } from '@chakra-ui/icons'
import { Container, Flex,Text,Button,HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <Container 
      bgGradient = {"linear(to-r,white,gray.900)"}
      
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
    <Text
     fontFamily={"mono"}
     fontSize = {{base : "22", sm : "28"}}
     fontWeight = {"bold"}
     textTransform ={"uppercase"}
     textAlign ={"center"}
     bgGradient = {"linear(to-r,gray.500,black)"}
     bgClip = {"text"}
     
     > <Link to ={"/"}> PROJECTIO</Link>

    </Text>
    
    <HStack spacing = {20} alignItems = {"center"}>
        <Link to = {"/create"}>
        <Button>
            <PlusSquareIcon  bgColor={"white"} fontSize={20}/>
        </Button>
        </Link>
        </HStack>



    </Flex>
   </Container>
  )
}

export default Navbar
