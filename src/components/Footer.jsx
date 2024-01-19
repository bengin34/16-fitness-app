import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
//hey
/**
* @description The function `Footer` returns a React component that renders a footer
* for a webpage with the following elements:
* 
* 	- A logo image with the source URL `Logo`.
* 	- The text "Made with ❤️" with a padding of 40px at the bottom.
* 
* @returns {  } The function `Footer` returns a React component that renders a box
* with a background color `#fff3f4`, a logo image with a width of 200px and height
* of 40px located on the left side of the footer and text "Made with ❤️" located on
* the right side.
*/
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" >
            <Stack gap="40px" alignItems="center" px="40px" pt="24px" >
              <img src={Logo} alt="" width="200px" height="40px" />
              <Typography variant='h5' pb="40px" mt="20px" >
                Made with  ❤️
              </Typography>
            </Stack>
    </Box>
  )
}

export default Footer
