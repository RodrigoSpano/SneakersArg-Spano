import { Stack, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Heading, Text, Box } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BiShoppingBag } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { Search } from './Search'

export const DrawerNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Box w='50px' overflowY='hidden'>
        <Button ref={btnRef} onClick={onOpen} variant='na'>
          <HiMenuAlt1 />
        </Button>
      </Box>
      <Drawer 
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody p={5}>
          <Heading as='h2' pt={5} textAlign='center'>All Sneakers</Heading>
          <Search />

          <Stack alignItems='center' gap={10} >
            <NavLink to={'/'}><Text variant={'nav'}>Home</Text></NavLink>
            <NavLink to={'/sneakers'} ><Text variant={'nav'}>Sneakers</Text></NavLink>
            <NavLink to={'/cart'} ><Text variant={'nav'} display='flex' flexDirection='row' alignItems='center' gap={1} >Shopping Bag <BiShoppingBag /> </Text></NavLink>
          </Stack>


        </DrawerBody>

      </DrawerContent>

      </Drawer>
    </>
  )
}
