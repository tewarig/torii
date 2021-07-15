import { Box, Divider ,Link,Text} from '@chakra-ui/layout';
import React from 'react';

function Footer(props) {
    return (
        <Box mt={5}>
          <Divider  bgGradient="linear(to-l, cyan.300 ,#d391fa)" height={1} />
          <Box height="10" align="center">
          <Text margin="5">
           Fuled by  ☕ & ❤️ 


          </Text>
          </Box>

            
        </Box>
    );
}

export default Footer;