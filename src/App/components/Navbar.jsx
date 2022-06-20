import React from 'react';
import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import { DrawerNav } from './Nav/Drawer';
import { NavLink, useNavigate } from 'react-router-dom';
import title from '../assets/title.png'
import unnamed from '../assets/unnamed.png'

export function Navbar() {

  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }

  return (
    <Stack userSelect='none' zIndex={1} overflowX='hidden' direction='row' height='50px' w='100vw' alignItems='center' justifyContent='space-between' position='fixed' bg='blue.400' pr={10} >
        <DrawerNav />
        <Box display='flex' flexDirection='row' alignItems='center' overflowY={'hidden'}>
          <Image src={unnamed} h='30px' />
          <Image src={title} h='30px' pt={1} onClick={handleHome} cursor='pointer'   />
        </Box>
    </Stack>
  )
}