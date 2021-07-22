import React from 'react';
import {Button, IconButton} from "@chakra-ui/button";
import { VStack,Flex ,Heading, Spacer , Box , Text  , Divider} from "@chakra-ui/layout";
import {Tooltip } from "@chakra-ui/react";
import  { FaSun , FaMoon, FaGithub} from "react-icons/fa";
import { FcList, FcSearch } from "react-icons/fc";
import {BsSearch ,BsCalendarFill, BsPeopleFill, BsPerson, BsFillExclamationCircleFill, BsStar } from "react-icons/bs";
import { useColorMode } from '@chakra-ui/color-mode';
import {SignedIn, UserButton , useUser} from '@clerk/clerk-react';
import {Link} from "react-router-dom";

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

 
    // const toggle = () => setIsOpen(!isOpen)
  
    return (
        <>
       <VStack p={5}>
           <Flex w="100%">
            <Link to="/">
            <Text ml="8"  bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
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
           <Tooltip label="Star! on github" >

           <IconButton ml={2} mr={1} icon={<FaGithub/>}  isRound="true"></IconButton>
           </Tooltip>
           <Tooltip label={isDark ? "Light mode":"Dark Mode"} >
           <IconButton ml={2} mr={2} icon={ isDark ? <FaSun color="yellow"/> : <FaMoon color="#59e5f7"/> } isRound="true" onClick={toggleColorMode}>
           </IconButton>
           </Tooltip>
           <Tooltip  label="Manage Profile">

           <Box ml={5} mr={1}>
           <SignedIn>          
          <UserButton bg="tomato" />
           </SignedIn>
           {
               !SignedIn && <h1> heeeeeeeeee</h1>
           }
          
           </Box>
           </Tooltip>

           </Flex>
       </VStack>
       <Divider  bgGradient="linear(to-l, cyan.300 ,#d391fa)" height={1} />
       <Drawer onClose={onClose} isOpen={isOpen} size={"xs"}>
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
                           <Box>
                           
                           <Link to="/OrganizationSearch" onClick={onClose}>
                            <Button ml="5%" width="100%">

                                  <BsSearch/> 
                                <Text fontSize="xl" ml="4">
                                Search Orignations
                                </Text>
                            </Button>
                           </Link>
                           <Link to="/OpenSourceEvents" onClick={onClose}>
                            <Button ml="5%" mt="5%" width="100%">
                                <BsCalendarFill/>

                                <Text fontSize="xl" ml="4">
                                 Open Source Events
                                </Text>
                            </Button>
                           </Link>
                           <Link to="/OpenProgram" onClick={onClose}>
                            <Button ml="5%" mt="5%" width="100%">
                              <BsPeopleFill mr="4%"/>
                                <Text fontSize="xl" ml="4%" >
                                 Open Source Program
                                </Text>
                            </Button>
                           </Link>
                           <Link to={{pathname: 'https://hashnode.com'}} target="_blank" onClick={onClose}>
                            <Button ml="5%" mt="5%" width="100%">
                            <BsFillExclamationCircleFill mr="4%"/>
                                <Text fontSize="xl" ml="5%" >
                                 Report a issue
                                </Text>
                            </Button>
                           </Link>
                           <Link to={{pathname: 'https://hashnode.com'}} target="_blank" onClick={onClose}>
                            <Button ml="5%" mt="5%" width="100%">
                              <BsStar mr="4%"/>
                                <Text fontSize="xl" ml="10%" >
                                 Star on github
                                </Text>
                            </Button>
                           </Link>
                           <Link to={{pathname: 'https://hashnode.com'}} target="_blank" onClick={onClose}>
                            <Button ml="5%" mt="5%" width="100%">
                              <BsPeopleFill mr="4%"/>
                                <Text fontSize="xl" ml="10%" >
                                 About
                                </Text>
                            </Button>
                           </Link>
                           </Box>
                        
                            
                            

                       
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>


       </>
    );
}

export default Navbar;