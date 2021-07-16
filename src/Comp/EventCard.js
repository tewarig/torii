import { Box , Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from 'react';

function EventCard(props) {
    const  formBackground = useColorModeValue("gray.100","gray.700");

    return (
       <Box  mt="1%" ml="8%"  width="80%" borderRadius={25}  padding="2%" display="flex" flexDirection="row" backgroundColor ="#fff" background={formBackground} >
           <Image  src="https://www.open-bio.org/wp-content/themes/obf-new/img/logos/obf_logo_icon-circle-tr.png"
                width="10%" 
                height="50%"
                 borderRadius="25px"
            />
                  <Box width="100%" ml="5%" >
                  <Text 
                    bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                   
                  >BOSC 2021                  </Text>

                  <Text>
                  BOSC is organized by the Open Bioinformatics Foundation (OBF), a non-profit group dedicated to promoting the practice and philosophy of open source software development and open science within the biological research community.


                  </Text>
                  <Box display="flex"  display="flex"    flexDirection="row" >  

                   <Text
                   bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                   fontSize="3xl"
                   fontWeight="extrabold"   
                   mt="4"
                   mr="4"

                   >
                    29 June
                   </Text>
                      <Link  to={{pathname: 'https://www.open-bio.org/events/bosc-2021/'}} target="_blank" >
                     
                      <Button colorScheme="pink" mt={5}  > Visit Website</Button>
                      </Link>
                  </Box>        
                   </Box>


       </Box>
    );
}

export default EventCard;