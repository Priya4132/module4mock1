import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack bg={"blue.200"} colorPalette={"white"} justifyContent={"space-between"} p={2}>
   <Link  to="/">Home</Link>
   <Link to="/products">Products</Link>
   <Link to="/cart">Cart</Link>
   </HStack>
  )
}

export default Navbar
