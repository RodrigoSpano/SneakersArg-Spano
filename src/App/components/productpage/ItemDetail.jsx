import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1)

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  const handleAdd = () => {
    const itemToCart = {
      ...item,
      count
    }
    console.log(itemToCart)
  }

  return(
    <Stack p={10}>
      <Button onClick={handleBack} alignSelf='flex-start' ml={5} mt={5} variant='back' w='50px' fontSize='12px' textTransform='uppercase'>⬅ back</Button>
      <Stack minH='xl' w={{base: 'xs',sm: 'md', md: 'container.md', xl:'container.xl'}} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' borderRadius={10} direction={{base:'column',xl:'row'}} alignItems='center' gap={2} p={5} >

        <Box>
          <Image src={item.img} boxSize={{base:'center center',md:'md'}} objectFit='contain'/>
        </Box>

        <Box display='flex' flexDirection='column' maxW='sm' gap={2}>

          <Heading as='h3' fontWeight='bold' pl={2} fontSize={{base:'20px', md: '30px', xl: '40px'}}>{item.name}</Heading>
          <Text fontFamily='Open Sans' fontWeight='500' w='140px' pl={2} fontSize={'2xl'} borderRadius={10}>U$${item.price}</Text>
          <Text fontSize={'14px'}>{item.des}</Text>

        </Box>

        <ItemCounter 
        counter={count}
        setCounter={setCount}
        max={item.stock}
        handleAdd={handleAdd}
        size={item.size}
        />

      </Stack>
    </Stack>
  )
}

export default ItemDetail;
