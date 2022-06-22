import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PriceBox({total, restore}) {


  return (
    <Flex direction='column' w={{base: 'min-content',md: '200px', lg:'max-content'}} h={{md:'sm'}} justifyContent={{lg:'center'}}>
      <Heading as='h3' textTransform='uppercase' fontWeight='light' letterSpacing={2} fontSize={{base:'lg',md:'xl', lg:'2xl'}} textAlign='left' >Total</Heading>
              <Box display='flex' flexDirection='row' gap={5} borderTop='1px black solid' fontSize='14px' justifyContent='space-between' pt={5} >
                <Text>SubTotal</Text>
                <Text fontWeight='bold' color='#000'>{total}</Text>
              </Box>
              <Box display='flex' fontSize='14px' flexDirection='row' gap={5} borderBottom='1px solid black' textAlign='left' justifyContent='space-between'>
                <Text>Tax</Text>
                <Text fontWeight='bold'>U$$ 5</Text>
              </Box>
            <Text textAlign='end' fontWeight='bold'>U$$ {total + 5}</Text>
            <Flex direction={{base:'column', lg: 'row'}} gap={4} pt={5}>
              <Link to='/cart/checkout'>
                <Button variant='cart' w={{lg:'200px'}}>
                Checkout
              </Button>
              </Link>
              <Button onClick={restore} variant='restore'>Restore</Button>
            </Flex>
    </Flex>
  )
}
