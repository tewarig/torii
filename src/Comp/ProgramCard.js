import { Box , Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge ,useMediaQuery } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react"

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
import axios from 'axios';

function ProgramCard({Id ,ImageUrl,TextTitle,TextDes,Date,Month,Youtube,Linki,Blog}) {
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
                //  borderRadius="25px"
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
                       <DrawerHeader align="center"> 
                         <Image  src={ImageUrl}
                              ml={"36%"}
                               width="25%"                                
                               height="70%"
                           />
                           <Text
                           margin="1%"
                           fontWeight="extraBold"
                           fontSize="3xl"
                           >

                           {TextTitle}
                           </Text>
                           </DrawerHeader>
                       <DrawerBody>
                       <Text
                        
                       >
                        {
                          TextDes
                        }

      
                        </Text>
                        <Box>
                            <Button margin="4%" colorScheme="pink">

                            <Text>
                            📜 Blog
                            </Text>
 
                           
                            </Button> 
                            {
                              Blog.map(
                                x=>(
                                  <>
                                  {
                                    <>
                                    <br/>
                                    <Link to={{pathname: x.link}} target="_blank">

                                      <Button margin="1%" ml="4%">

                                      {x.name}
                                      </Button>

                                    </Link>
                                    </>

                                  }
                                  </>
                                )
                              )
                            }       
                             <Text margin="4%">
                              
                            </Text>
                        </Box>
                        <Box>
                            <Button margin="4%" colorScheme="pink">

                            <Text> 🎥 Youtube Video</Text>
                            </Button>
                            {
                                Youtube.map(
                                    x =>(
                          <AspectRatio width="70%" height="300px" align="center" ratio={1} margin="4%">
                              <iframe
                                title="naruto"
                                src={x}
                                allowFullScreen
                              />
                            </AspectRatio>
                                    )
                                )
                            }
                           
                            
                            

                            <Text>

                            </Text>
                        </Box>
                        <Box>
                            <Button margin="5%" colorScheme="pink">

                            <Text> 🎥 Offical Resources</Text>

                            </Button>
                            <Text>
                                <Link to={{pathname: Linki}} target="_blank" >
                                    <Button rgin="3%" colorScheme="green" margin="5%">

                                    {Linki.slice(8)}
                                    </Button >
                                </Link>

                            </Text>
                        </Box>
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>



       </Box>
    );
}

export default ProgramCard;