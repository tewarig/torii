import { Box , Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge ,useMediaQuery} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from 'react';

function EventCard({Id ,ImageUrl,TextTitle,TextDes,Date,Month,Linki}) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const [check] = useMediaQuery("(min-width: 1025px)")


    return (
       <Box  id={Id}mt="1%" ml="8%"  width="80%" borderRadius={25}  padding="2%" display="flex" flexDirection={check ?   "row" : "column"} backgroundColor ="#fff" background={formBackground} >
           <Image  src={ImageUrl}
                width={check ? "10%" : "90%"} 
                ml={check? "0%":"6%" }
                height="50%"
                 borderRadius="25px"
            />
                  <Box width="100%" ml="5%" >
                  <Text 
                    bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                   
                  >
                    {TextTitle}       
                   </Text>

                  <Text>
                  {
                    TextDes
                  }

                  </Text>
                  <Box display="flex"  display="flex"    flexDirection="row" >  

                   <Text
                   bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                   fontSize="3xl"
                   fontWeight="extrabold"   
                   mt="4"
                   mr="4"

                   >
                     {
                     Date
                     }<>
                      
                     </>               
                       {Month}
                   </Text>


                      <Link 
                       to={{pathname: {Linki} }} 
                       target="_blank" >
                     
                      <Button colorScheme="pink" mt={5}  > Visit Website</Button>
                      </Link>
                  </Box>        
                   </Box>


       </Box>
    );
}

export default EventCard;