import React from 'react';
import { Stack, Image } from '@chakra-ui/react'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/unnamed.png'
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <Stack zIndex={1} overflowX='hidden' direction='row' height='44px' w='100vw' justifyContent='center' alignItems='center' pr={4} pl={4} bg='blue.400' position='fixed'>
      <Stack direction='row' alignItems='center' spacing={4}>
        <Image src={logo} boxSize='50px' alt='logo' />
        <Stack direction='row' color='gray.300' fontSize={{base: '12px', sm: '16px'}} spacing={10}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/products-page'}>Sneakers</NavLink>
          <NavLink to={'contact'}>Contact</NavLink>
        </Stack>
        <Stack direction='row' color='gray.300' spacing={4}>
          <FaUserAlt />
          <FaShoppingCart />
        </Stack>
      </Stack>
    </Stack>
  )
}