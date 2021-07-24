import { Box , Spacer, Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge ,useMediaQuery ,Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from 'react';

function EventCard({Id ,ImageUrl,TextTitle,TextDes,Linki,Date,Month}) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const [check] = useMediaQuery("(min-width: 1025px)")


    return (
       <Box  id={Id}mt="1%" ml={check ?"8%" : "5%"}  width={check ? "80%" : "90%"} borderRadius={25}  padding="2%" display="flex" flexDirection={check ?   "row" : "column"} backgroundColor ="#fff" background={formBackground} >
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
                    ml={check ? "0%":"0%"}
                    
                    >
                    {TextTitle}       
                   </Text>
                   <Box ml={check? "0%":"25%"}>
                 
                      <Button   >
                    {
                      Date
                    }

                   
                  </Button>
              
                  <Button ml={check?"0%":"2%"} >
                    {
                      Month
                    }

                  </Button>
                    </Box>

                  <Text>
                  {
                    TextDes
                  }

                  </Text>
                  <Box>

                  </Box>
                  <Box display="flex"  display="flex"    flexDirection="row" >  


             
                      <Link 
                       to={ {pathname : Linki}} 
                       target="_blank" >
                     
                      <Button colorScheme="pink" mt={5}  > Visit Website</Button>
                      </Link>

                  </Box>        
                   </Box>


       </Box>
    );
}

export default EventCard;