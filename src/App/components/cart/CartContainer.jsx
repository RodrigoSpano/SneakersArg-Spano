import { Stack, chakra, Heading, Text, Flex, Image, Box, Badge, Button } from '@chakra-ui/react'
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import PriceBox from './PriceBox'
import { FaTrashAlt } from 'react-icons/fa'


export default function CartContainer() {

  const {cart, totalPrice, restoreCart, removeItem } = useCartContext()

  return (
    <Stack minH='xs' w={{base:'sm',md:'container.md',lg:'container.lg'}} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' borderRadius={20} alignItems={cart.length === 0 ? 'normal' : 'center' } justifyContent={cart.length === 0 ? 'left' : 'space-between'} p={5} direction={{base: 'column', md:'row'}} >

      <Stack w={{md:'sm', lg:'lg'}}>
        {
          cart.length === 0
          ? <chakra.span textTransform='uppercase' fontWeight='ligh' letterSpacing={2} color='gray.400'>shopping cart is empty...</chakra.span>
          : cart.map( (item) => (
            <Flex  h='150px' minW={{base:'sm', md:'md'}} direction='row' borderBottom='1px solid gray' >
              <Image src={item.img} objectFit='contain'/>
              <Box display='flex' flexDirection='column' gap={2} justifyContent='center'>
                <Heading as='h3' fontSize={{base:'12px', md: '18px'}}>{item.name}</Heading>
                <Text fontFamily='open sans' fontSize='12px' fontWeight='bold'>Quantity: {item.quantity} | Size: {item.size}</Text>
                <Badge colorScheme='green' borderRadius={10} fontSize={{lg:'14px'}} maxW='max-content' fontFamily='open sans'>price $${item.price}</Badge>
                <Button onClick={() => removeItem(item.id)} w='min-content' bgColor='white' transition='all ease 0.5s' _hover={{ bgColor:'blue.200'}}
                >
                  <FaTrashAlt />
                </Button>
              </Box>
            </Flex>
          ) )
        }
      </Stack>

              <Stack fontFamily='open sans' alignItems='center' justifyContent='center'>
          {
            cart.length > 0
            &&
            <>
                <PriceBox 
                  total={totalPrice()}
                  restore={restoreCart}
                />
            </>
          }
              </Stack>

    </Stack>

  )
}