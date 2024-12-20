import React, { useEffect } from 'react'
import{Box, Container,SimpleGrid,Text,VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/products';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
  
  const {fetchProducts,products} = useProductStore();

  useEffect(()=>{    fetchProducts();  },[fetchProducts]);
  console.log("products",products);


  return (
    <Box
    backgroundImage="url('https://i.ibb.co/qg0rjWz/b-w1.jpg')" // Replace with your image URL
      backgroundSize="cover" // Ensures the image covers the whole background
      backgroundPosition="center" // Centers the image
      minHeight="100vh" // Ensures the box spans the full viewport height
      color="white" >
    <Container  padding={7}
    >
      <VStack spacing = {8}>
   
        <Text color={"white"} fontFamily={"mono"} fontWeight={"bold"}>Hi  I am naveen this is one of my first website that i made to learn webdev
          i was mostly making games till now, but now am experimenting with webdev<br/>
          <br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this websites contains the projects that i did and still working on..<br/>   
          <br/>
          .<br/>   
          <br/>
          .<br/>   
          <br/>
          .<br/>   
          <br/>
          .<br/>   
          <br/>
          .<br/> 
          <br/>
          .<br/> 
          <br/>
          .<br/> 
          <br/>
          .<br/> 
          <br/>
          .<br/> 
          <br/>
          .<br/>     </Text>
          <Text
        fontFamily={"mono"}
        fontSize={39}
        fontWeight={"bold"}
        
        mm
        textAlign={"center"}
        >
          PROJECTS
        </Text>
        <SimpleGrid
          columns = {{
            base:1,
            md:2,
            lg:3,
          }}
          spacing = {10}
          w = {"full"}>
            {products.map((product)=>(
              <ProductCard key = {product._id} product = {product}/>
            ))}

        </SimpleGrid>
       

      </VStack>
    </Container>
    </Box>
  
)
        }

export default HomePage
