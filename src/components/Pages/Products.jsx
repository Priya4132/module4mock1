import { addToCart, fetchProducts } from '@/redux/actions';
import {Image, GridItem, Heading, HStack, VStack ,Text, Flex,Box,Button} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from "@chakra-ui/react"


const Products = () => {
    const products=useSelector((state)=>state.product.products);
    const loading=useSelector((state)=>state.product.loading)
    const dispatch=useDispatch();
    console.log(products)
    
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

 const handleAddtoCart=(id,price,title,image)=>{
    
  console.log(id)
  const item={id,price,quantity:1,image}
   //localStorage.setItem("cartItems", JSON.stringify(item));
    dispatch(addToCart(item));

    // dispatch(fetchProducts());

}

  return (
    <>
    <Heading textAlign={"center"}>Welcome to Our Ecommerce App</Heading>
    <HStack m={4}>
       
        {loading && <Text>Loading...</Text>}
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
         
          
{
 products.length>0 && products.map((product)=>{
    return  <Box bg="bg" shadow="md" borderRadius="md" key={product.id} p={4} >
        <Image rounded="md" src={product.image} height={"100px"}/>
    <Text colorPalette={"blue"}>{product.title}</Text>
    <Text>{product.price}</Text>
    <Button colorPalette={"blue"} onClick={handleAddtoCart(product.id,product.title,product.image,product.price)}  >Add To Cart</Button>
    </Box>
   })}
   

         
        </Grid>
    </HStack>
    </>
  )
}

export default Products
