import { Heading, Stack, Input, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Filter() {


  const isError = Input === ''


  return (
    <Stack userSelect='none' direction='column' maxW='250px' alignItems='center' justifyContent='space-around'  h='min-content' w='xs' mt={5} ml={5} borderRadius={20} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' p={5}>

      <Stack p={5} gap={5}>
        <form >
          <Input isInvalid={isError} name='prod' size='xs' variant='filled' maxW='md' placeholder='search..' borderRadius={10} _placeholder={{color:'black', fontWeight: 'bold'}}/>
        </form>

        <Flex direction='column' gap={2} borderBottom='1px solid gray' pb={5}>
          <Heading as='h3' fontSize='14px' letterSpacing={2} textTransform='capitalize' fontWeight='bold' >brands</Heading>
          <Box fontSize='14px' display='flex' flexDirection='column' fontWeight='500' fontFamily='open sans' color='gray.600' >
            <NavLink to={'/sneakers/brand/nike'}>nike</NavLink>
            <NavLink to={'/sneakers/brand/adidas'}>Adidas</NavLink>
            <NavLink to={'/sneakers/brand/newbalance'}>New Balance</NavLink>
          </Box>
        </Flex>
        <Flex direction='column' gap={2}>
          <Heading as='h3' fontSize='16px' letterSpacing={2} textTransform='capitalize' fontWeight={'bold'}>price</Heading>
          <Box display='flex' flexDirection='column' fontSize='14px' fontWeight='500' fontFamily='open sans' color='gray.600'>
          <NavLink to={'/sneakers/price/200'}>less than $200</NavLink>
          <NavLink to={'/sneakers/price/400'}>less than $400</NavLink>
          <NavLink to={'/sneakers/price/600'}>less than $600</NavLink>
          </Box>
        </Flex>
      </Stack>

    </Stack>
    )
}
