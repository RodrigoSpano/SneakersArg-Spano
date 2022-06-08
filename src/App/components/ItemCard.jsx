import { Stack, Image, Box, Text, Button, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function ItemCard({img, name, price, id}) {
  return (
    <Stack borderRadius={10} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.05)' w='sm' h='sm' direction='column'>
      <Image src={img} objectFit='contain' />
      <Box fontWeight='bold' display='flex' flexDirection='column' alignItems='center' gap={5}>
        <Text>{name}</Text>
        <Badge fontSize='md' colorScheme='green'>U$${price}</Badge>
        <Link to={`/sneakers/${id}`}>
          <Button w='100px' variant='sk'>
            See more
          </Button>
        </Link>
      </Box>
    </Stack>
    )
}
