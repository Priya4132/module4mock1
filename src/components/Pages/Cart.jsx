import React from 'react'
import { useSelector } from 'react-redux'
import {Image, GridItem, Heading, HStack, VStack ,Text, Flex,Box,Button} from '@chakra-ui/react';
import { Grid } from "@chakra-ui/react"


const Cart = () => {
    const cart=useSelector((state)=>state.cart.items);
    
    
    
    //const cart=JSON.parse(localStorage.getItem("cartItems"))
    console.log("item in the cart",cart)
  return (
    <>


    <Heading textAlign={"center"}>Welcome to Our Cart</Heading>
   


       <HStack m={4}>
          
          
           <Grid templateColumns="repeat(3, 1fr)" gap="6">
            
             
   {
    cart.length>0 && cart.map((item)=>{
       return  <Box bg="bg" shadow="md" borderRadius="md" key={cart.id} p={4} >
           <Image rounded="md" src={cart.image} height={"100px"}/>
       <Text colorPalette={"blue"}>{cart.title}</Text>
       <Text>{cart.price}</Text>
       {/* <Button colorPalette={"blue"} onClick={handleAddtoCart(product.id,product.title,product.image,product.price)}  >Add To Cart</Button> */}
       </Box>
      })}
      
   
            
           </Grid>
       </HStack>
       </>
  )
}

export default Cart
