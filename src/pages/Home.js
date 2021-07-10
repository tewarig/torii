import React from 'react';
import ToriLogo from "../assets/iconRm.png";
import {Text ,Image  ,Spacer, IconButton, VStack , Flex , useMediaQuery , Divider} from "@chakra-ui/react";
import Navbar from "../Comp/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-router-dom";



function Home(props) {
    const [check] = useMediaQuery("(min-width: 1000px)")

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

        </>
    );
}

export default Home;