import React from 'react';
import {IconButton} from "@chakra-ui/button";
import { VStack,Flex ,Heading, Spacer , Box , Text } from "@chakra-ui/layout";
import {Tooltip } from "@chakra-ui/react";
import  { FaSun , FaMoon, FaGithub} from "react-icons/fa";
import { useColorMode } from '@chakra-ui/color-mode';
import {SignedIn, UserButton , useUser} from '@clerk/clerk-react';

function Navbar(props) {
    const {colorMode , toggleColorMode }= useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <>
       <VStack p={5}>
           <Flex w="100%">
            <Text ml="8"  bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
  fontSize="3xl"
  fontWeight="extrabold"
 >
                Toriii
            </Text>
           <Spacer>

           </Spacer>
           <Tooltip label="Star! on github" >

           <IconButton ml={2} mr={1} icon={<FaGithub/>} isRound="true"></IconButton>
           </Tooltip>
           <Tooltip label={isDark ? "Light mode":"Dark Mode"} >
           <IconButton ml={2} mr={2} icon={ isDark ? <FaSun/> : <FaMoon/> } isRound="true" onClick={toggleColorMode}>
           </IconButton>
           </Tooltip>
           <Tooltip  label="Manage Profile">

           <Box ml={5} mr={1}>
           <SignedIn>          
          <UserButton bg="tomato" />
           </SignedIn>
           </Box>
           </Tooltip>

           </Flex>
       </VStack>
       </>
    );
}

export default Navbar;