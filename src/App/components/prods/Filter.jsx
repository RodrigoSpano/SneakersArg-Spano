import { Box, Stack, Select, Input, chakra, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import React from 'react'

export default function Filter() {
  return (
    <Stack direction='column' maxW='250px' alignItems='center' justifyContent='space-around'  h='xs' w='xs' mt={5} ml={5} borderRadius={20} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)'>

      <Stack>
      <chakra.form>
          <Input size='xs' variant='filled' maxW='md' placeholder='search..' borderRadius={10} _placeholder={{color:'black', fontWeight: 'bold'}}/>
        </chakra.form>

        <Stack alignItems='center'>
          <Select variant='flushed' placeholder='brands' fontWeight='bold' size='sm' w='100px'>
            <option value='nike'>nike</option>
            <option value='adidas'>adidas</option>
            <option value='new-balance'>new balance</option>
          </Select>
          <Select  variant='flushed' placeholder='size' size='sm' w='100px' fontWeight='bold'>
            <option>7,5 US</option>
            <option>8 US</option>
            <option>8.5 US</option>
            <option>9 US</option>
            <option>9.5 US</option>
            <option>10 US</option>
            <option>10.5 US</option>
            <option>11 US</option>
            <option>11.5 US</option>
            <option>12 US</option>
            <option>12.5 US</option>
            <option>13 US</option>
            <option>13.5 US</option>
            <option>14 US</option>
          </Select>
        </Stack>

          <Box pt={5}>
            <RangeSlider defaultValue={[120, 500]} min={0} max={600} step={20} >
              <RangeSliderTrack bg='blue.200'>
                <RangeSliderFilledTrack bg='blue.600' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={2} index={0} />
              <RangeSliderThumb boxSize={2} index={1} />
            </RangeSlider>
          </Box>
      </Stack>

    </Stack>
    )
}
