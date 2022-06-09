import React from 'react'
import { Text, Stack, Heading, Box, Flex, Button } from '@chakra-ui/react'
import SupportFooter from './SupportFooter'
import Payment from './Payment'

export function Footer() {
  return (
    <Stack bgColor='gray.900' w='100vw' minH='300px' userSelect='none' >
      <Stack direction={{base:'column', sm: 'row'}} justifyContent='center' alignItems={{base: 'center', sm: 'center', md:'normal'}} mt={5} gap={10} flexWrap={{base: 'nowrap', sm: 'wrap', md:'wrap'}}>
        <SupportFooter />
        <Box textAlign='left'>
            <Heading color='gray.100' as='h2' pb={5} fontWeight='light' fontSize={{base:'20px', md:'30px'}} >Why us?</Heading>
            <Text variant='foot'>💣Exclusive products</Text>
            <Text variant='foot'>🌍imported products</Text>
            <Text variant='foot'>📦Shipping all over the country</Text>
            <Text variant='foot'>✔ Quality guarantee</Text>
        </Box>
        <Payment />
        <Box>
          <Heading as='h2' fontSize={{base:'20px',md: '30px'}} color='gray.100' fontWeight='light' pb={5}>Weekly NewsLetter</Heading>
          <Button variant='sk' >Suscribe</Button>
        </Box>
      </Stack>
        <Text color='white' pl={5} pt={20} fontSize='xs'>Copyright ©SneakersArg 2022</Text>
    </Stack>
  )
}
