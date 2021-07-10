import React from 'react';
import ToriLogo from "../assets/iconRm.png";
import {Text ,Image  ,Spacer, IconButton, VStack , Flex , useMediaQuery} from "@chakra-ui/react";
import Navbar from "../Comp/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-router-dom";


import Cror from "../assets/jungle1.png" ;

function Home(props) {
    const [check] = useMediaQuery("(min-width: 600px)")

    return (
        <>
        <Flex align="center"  flexDirection={check ?  "row"  : "column"}  >
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
           <Image src={Cror} height="100%" width="100%" />

        </Flex>
        </>
    );
}

export default Home;