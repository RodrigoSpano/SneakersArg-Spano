import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { BsPaypal } from 'react-icons/bs';
import { FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';

export default function SocialMedia() {
  return (
    <Box>
      <Heading as='h2' fontWeight='light' fontSize={{base: '20px', md:'30px'}} color='gray.100' pb={5}>
        Payment methods
      </Heading>
        <Flex direction='row' gap={5} color='gray.300' fontSize='x-large'>
        <BsPaypal />
        <FaCcMastercard />
        <FaCcApplePay />
        <SiPaytm />
        </Flex>
        
    </Box>
  )
}
