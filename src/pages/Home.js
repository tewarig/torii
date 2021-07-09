import React from 'react';
import ToriLogo from "../assets/iconRm.png";
import {Text } from "@chakra-ui/react";
import Navbar from "../Comp/Navbar";


function Home(props) {
    return (
        <>
      
        <div align="left"> 
        <div align="center">
             <img src={ToriLogo} />
             <Text
               bgGradient="linear(to-l, #D62121 ,#d391fa)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
   Torii  
</Text>
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="xl"
  fontWeight="extrabold"
> 
 Your gate to open source.
</Text>


        </div>
        </div>
        </>
    );
}

export default Home;