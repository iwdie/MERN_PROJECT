import { Button, Container, Heading,useColorMode,useColorModeValue,VStack,Box,Input, Flex,useToast} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useProductStore } from '../store/products';

const CreatePage = () => {
    const[newProduct,setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const toast = useToast()
    const{createProduct}=useProductStore();
    const handleAddProduct = async() => {
        const{success,message}= await createProduct(newProduct)
        if(!success){
            toast({
                title:"Error",
                description: message,
                status:"error",
                isClosable:true,
                containerStyle: {
                    maxWidth: "200px", // Adjust width
                    padding: "10px",  // Adjust padding
                    fontSize: "12px",},
                     // Adjust font size
            });

        } else{
            toast({

                title:"Success",
                description: message,
                status:"success",
                isClosable:true,
                duration:2000,
                containerStyle: {
                    maxWidth: "700px",
                    maxHeight:"100px",// Adjust width
                    padding: "10px",  // Adjust padding
                    fontSize: "12px", // Adjust font size
                
                  },
                
                
            });


        }
    };
  return (
      <Box
      backgroundImage="url('https://i.ibb.co/qg0rjWz/b-w1.jpg')" // Replace with your image URL
        backgroundSize="cover" // Ensures the image covers the whole background
        backgroundPosition="center" // Centers the image
        minHeight="100vh" // Ensures the box spans the full viewport height
         >
  <Container width={"full"} >
    <Flex alignItems={"center"} justifyContent={"center"}>
    <VStack spacing ={8} >
        <Heading size={"7xl"} color={"white"} textAlign={"center"} fontWeight = {"bold"} mb = {0} fontFamily={"mono"} fontStyle={"revert-layer"}  fontSize = {{base : "26", sm : "19"}} > 
            ANOTHER   PROJECT   AMIGO!
        </Heading>

        <Box w={"full"} bg = {useColorModeValue("gray.100","gray.800")} paddingX = {20} paddingY = {7} rounded = {"lg"} shadow = {"md"} >
        <VStack spacing={4}>
        <Input placeholder = 'Project Name'
                fontFamily={"mono"}
                name = 'name'
                value = {newProduct.name}
                onChange = {(e) => setNewProduct({...newProduct,name:e.target.value})}
                />
                 <Input
                  fontFamily={"mono"}
                  placeholder = 'TimeGiven'
                name = 'price'
                type='number'
                value = {newProduct.price}
                onChange = {(e) => setNewProduct({...newProduct,price:e.target.value})}
                />
                 <Input fontFamily={"mono"}
                 placeholder = 'Image URL'
                name = 'image'
                value = {newProduct.image}
                onChange = {(e) => setNewProduct({...newProduct,image:e.target.value})}
                />
                <Button textColor={"white"} onClick = {handleAddProduct} width={"9"} bgColor={"black"} rounded={100} shadow = {"md"} >
                        +
                </Button>
                

            </VStack>

        </Box>
        
    </VStack>
    </Flex>
  </Container>;
  </Box>)
  
};

export default CreatePage
