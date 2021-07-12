import React from 'react';
import ToriLogo from "../assets/iconRm.png";
import {Text ,Image  ,Spacer, IconButton} from "@chakra-ui/react";
import Navbar from "../Comp/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-router-dom";


function Error(props) {
    return (
        <>
      <br/>
      <br/>
       <br/>
       <br/>
      <br/>
       <br/>
              <div align="center">
          <Image 
           borderRadius="full"
           boxSize="150px"         
          src="https://avatars.githubusercontent.com/u/54894783?v=4"  />
          <br/>
         
         <Text
         align="center"
         ml="3"
           bgGradient="linear(to-l, #7928CA,#FF0080)"
           bgClip="text"
           fontSize="xl"
           fontWeight="extrabold"
          >
              The person responsible for this error.
          </Text>
          <Text
         align="center"
         ml="3"
           bgGradient="linear(to-l, #7928CA,#FF0080)"
           bgClip="text"
           fontSize="xl"
           fontWeight="extrabold"
          >
              Help Him to fix this error 
          </Text>
          <br/>
          <Link to={{pathname : "https://twitter.com/oyeTewari"}} target="_blank">
          <IconButton icon={<FaTwitter/>} isRound="true" > 

          </IconButton>
          </Link>
          <Link to={{pathname: "http://https//github.com/tewarig"}}  target="_blank">
          <IconButton icon={<FaGithub/>} isRound="true" ml="2">

          </IconButton>
          </Link>
           <IconButton icon={<FaLinkedin/>} isRound="true" ml="2">

           </IconButton>

        </div>
        </>
    );
}

export default Error;