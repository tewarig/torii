import { Box , Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge ,useMediaQuery} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from 'react';

function ProgramCard({Id ,ImageUrl,TextTitle,TextDes,Date,Month,Linki}) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const [check] = useMediaQuery("(min-width: 1025px)")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState("md")



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



                      <Link 
                       to={ {pathname : Linki}} 
                       target="_blank" >
                     
                      <Button colorScheme="pink" mt={5}  > Visit Website</Button>
                      </Link>
                      <Button colorScheme="pink" m={5} 
                      onClick={onOpen}>
                        More Info
                      </Button>
                  </Box>        
                   </Box>
                   <Drawer onClose={onClose} isOpen={isOpen} size={check ? "xl" :"xs"}>
                     <DrawerOverlay />
                     <DrawerContent>
                       <DrawerHeader> {TextTitle}</DrawerHeader>
                       <DrawerBody>
                           You're trapped 😆 , refresh the page to leave or press 'Esc' key.
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>



       </Box>
    );
}

export default ProgramCard;