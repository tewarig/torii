import React from 'react';
import {Button, IconButton} from "@chakra-ui/button";
import { VStack,Flex ,Heading, Spacer , Box , Text  , Divider} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/react";
import {Tooltip } from "@chakra-ui/react";
import  { FaSun , FaMoon, FaGithub, FaUser} from "react-icons/fa";
import { FcList, FcSearch } from "react-icons/fc";
import {BsSearch ,BsCalendarFill, BsPeopleFill, BsPerson, BsFillExclamationCircleFill, BsStar } from "react-icons/bs";
import { useColorMode ,useColorModeValue } from '@chakra-ui/color-mode';
import {SignedIn, UserButton , useUser ,SignedOut} from '@clerk/clerk-react';
import {Link} from "react-router-dom";
import Cleak from '../assets/clerk1.png';

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

import MenuToggle from "./MenuToggle";

function Navbar(props) {
    const {colorMode , toggleColorMode }= useColorMode();
    const isDark = colorMode === 'dark';
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState("md")
    const [check] = useMediaQuery("(min-width: 1025px)")
    const [meow ,setMeow] = React.useState(false);
    const  formBackground = useColorModeValue("white.100","gray.900");

    let flag = false;
    var setFlag  = () =>{
      setMeow(!meow);
      onClose();
    }
    var callFlag = () =>{
      setMeow(!meow)
      onOpen()
    }


 
    // const toggle = () => setIsOpen(!isOpen)
  
    return (
        <>

        <Box position="fixed" width="100%" backgroundColor="#fff" background={formBackground} zIndex="1000" >

       <VStack p={5} >
           <Flex w="100%">
            <Link to="/">
            <Text ml="8"  bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
              z-index={5}
              >
                Toriii
            </Text>
            </Link>
           <Spacer>

           </Spacer>

           {/* <Text alignSelf="center">  Callander </Text>
           <Text alignSelf="center"> Find a Issue</Text>
           <Text alignSelf="center"> Project of the day </Text>
           <Text alignSelf="center">
           Find altenatives
          </Text> */}
           <Tooltip label="Menu">
            <IconButton onClick={onOpen} ml={2} mr={1} icon={<FcList />} isRound="true"></IconButton>
           </Tooltip>
           {check &&
           <Tooltip label="Star! on github" >

           <IconButton ml={2} mr={1} icon={<FaGithub/>}  isRound="true"></IconButton>
           </Tooltip>
           }
           { check &&
           <Tooltip label={isDark ? "Light mode":"Dark Mode"} >
           <IconButton ml={2} mr={1} icon={ isDark ? <FaSun color="yellow"/> : <FaMoon color="#59e5f7"/> } isRound="true" onClick={toggleColorMode}>
           </IconButton>
           </Tooltip>
            }
           <Tooltip  label="Manage Profile">
             <Box ml={5} mr={1}>
            <SignedIn>          
              <UserButton bg="tomato" />
               </SignedIn>
             </Box>
           </Tooltip>
            <SignedOut>
               <Tooltip label="Sign in / SignOut "> 
                 <IconButton icon={<FaUser/>} isRound="true"  onClick={callFlag}>
                 </IconButton>
               </Tooltip>
           </SignedOut>

           </Flex>
       </VStack>
       <Divider  bgGradient="linear(to-l, cyan.300 ,#d391fa)" height={1} />
       <Drawer onClose={meow ? setFlag : onClose } isOpen={isOpen} size={"xs"}>
                     <DrawerOverlay />
                     <DrawerContent>
                       <DrawerHeader align="center"> 
                        
                       <Text   bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                        fontSize="8xl"
                        fontWeight="extrabold"
                        >
                          Toriii
                      </Text>
                           </DrawerHeader>
                       <DrawerBody>
                        {meow ?
                        <>
                        <Box mt="50%">
                         <Link to="/sign-in/">
                          <Button ml="1%" mt="5%" width="100%">

                              
                             <Text fontSize="xl" ml="4">
                             Sign In
                               </Text>
                             </Button>
                           </Link>
                           <Link to="/sign-up/">
                             <Button ml="1%" mt="5%" width="100%">

                              
                             <Text fontSize="xl" ml="4">
                             Sign Up
                             </Text>
                             </Button>
                           </Link>
                             <Box mt="50%" >
                               <Text margin="5%">
                                 Powered by
                               </Text>
                               <Link to={{pathname: 'https://clerk.dev/' }} target="_blank">
                               <img src={Cleak} width="100%" height="50%" />
                               </Link>
                             </Box>
                        </Box>
                        
                        </> 
                        :
                        <Box>
                          {!check &&
                          <Button ml="1%" mt="5%" width="100%" onClick={toggleColorMode} >
                        {isDark ? <FaSun color="yellow"/> : <FaMoon color="#59e5f7"/> }  
   
                             <Text fontSize="xl" ml="4%">
                             {isDark ?  "Light Mode" : "Dark Mode"}
                             </Text>
                          </Button>
                          }
                           
                           <Link to="/OrganizationSearch" onClick={onClose}>
                            <Button ml="1%" mt="5%" width="100%">

                                  <BsSearch/> 
                                <Text fontSize="xl" ml="4">
                                Search Orignations
                                </Text>
                            </Button>
                           </Link>
                           <Link to="/OpenSourceEvents" onClick={onClose}>
                            <Button ml="1%" mt="5%" width="100%">
                                <BsCalendarFill/>

                                <Text fontSize="xl" ml="4">
                                 Open Source Events
                                </Text>
                            </Button>
                           </Link>
                           <Link to="/OpenProgram" onClick={onClose}>
                            <Button ml="1%" mt="5%" width="100%">
                              <BsPeopleFill mr="4%"/>
                                <Text fontSize="xl" ml="4%" >
                                 Open Source Program
                                </Text>
                            </Button>
                           </Link>
                           <Link to={{pathname: 'https://hashnode.com'}} target="_blank" onClick={onClose}>
                            <Button ml="1%" mt="5%" width="100%">
                            <BsFillExclamationCircleFill mr="4%"/>
                                <Text fontSize="xl" ml="5%" >
                                 Report a issue
                                </Text>
                            </Button>
                           </Link>
                           <Link to={{pathname: 'https://hashnode.com'}} target="_blank" onClick={onClose}>
                            <Button ml="1%" mt="5%" width="100%">
                              <BsStar mr="4%"/>
                                <Text fontSize="xl" ml="10%" >
                                 Star on github
                                </Text>
                            </Button>
                           </Link>
                           <Link to={{pathname: 'https://hashnode.com'}} target="_blank" onClick={onClose}>
                            <Button ml="1%" mt="5%" width="100%">
                              <BsPeopleFill mr="4%"/>
                                <Text fontSize="xl" ml="10%" >
                                 About
                                </Text>
                            </Button>
                           </Link>
                          <Text>
                          </Text>
                           </Box>
                      }
                         
                            
                            

                       
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>


              </Box>
              <Box height="15vh">
                          </Box>
       </>
    );
}

export default Navbar;