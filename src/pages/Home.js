import React from 'react';
import ToriLogo from "../assets/iconRm.png";
import {Text ,Image  ,Spacer, IconButton, VStack , Flex , useMediaQuery , Divider , Grid , GridItem , Box} from "@chakra-ui/react";
import Navbar from "../Comp/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-router-dom";

import { FcBinoculars} from "react-icons/fc";


function Home(props) {
    const [check] = useMediaQuery("(min-width: 1025px)")

    return (
        <>
        <Flex align="center"  flexDirection={check ?  "row"  : "column"}  background="" >
        <div alignSelf="center">
        <Text
                     align="center"
                     ml={check ? "150" : "0"}
                     mt={check ? "-300" : "0"}
                     bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                     bgClip="text"
                       fontSize="9xl"
                       fontWeight="extrabold"

            >
                 Toriii
            </Text>
            <Text
                     align="center"
                     ml={check ? "150" : "0"}
                     mt={check ? "100" : "0"}
                     bgGradient="linear(to-l, #7928CA,#FF0080)"
                       bgClip="text"
                       fontSize="3xl"
                       fontWeight="extrabold"
                       >
              Your Gateway to  
            </Text>
            <Text
                     align="center"
                     ml={check ? "150" : "0"}
                     bgGradient="linear(to-l, #7928CA,#FF0080)"
                     
                     bgClip="text"
                     fontSize="5xl"
                     fontWeight="extrabold"
                     >
                 Open Source
            </Text>
            </div>
            <Spacer></Spacer>
           <img src="https://inchilly.sirv.com/Images/jungle1.png" height="100%" width="100%"   lazyload="off" />

        </Flex>
        <Divider  bgGradient="linear(to-l, cyan.300 ,#d391fa)" height={1} />
        <Flex  flexDirection={check ? "row" : "column"}>

        <Box
          w={check ? "25%" : "90%"}
          margin="5%"
          h="300px"
          bgGradient="linear(to-r,  #008793, #00bf72, #a8eb12)"
          borderRadius={25}
          >
        <div align="center"  >

        <IconButton  isRound="true"  icon={<FcBinoculars size="large"/>}  mt="5%" width="30%" height="30%">
       
       
        </IconButton>
        <Text 
          fontSize="3xl"
          mt="5%"
       >
            Search Issues on Github
        </Text>
        </div>
        </Box>
        <Box
          h="300px"
          bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
          borderRadius={25}
          w={check ? "25%" : "90%"}
          margin="5%"
          alignContent="center"
          >
             

        </Box>
        <Box
          h="300px"
          bgGradient="linear(to-r, #0052d4, #4364f7 , #6fb1fc)"
          borderRadius={25}
          w={check ? "25%" : "90%"}
          margin="5%"
          >

        </Box>
         </Flex>
        </>
    );
}

export default Home;