import React from 'react';
import ToriLogo from "../assets/iconRm.png";
import {Text ,Image  ,Spacer, IconButton, VStack , Flex , useMediaQuery , Divider , Grid , GridItem , Box, Button, Checkbox } from "@chakra-ui/react";
import { Input } from '@chakra-ui/input';

import Navbar from "../Comp/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-router-dom";
import toast ,{Toaster} from "react-hot-toast";


import { FcBinoculars} from "react-icons/fc";
import axios from 'axios';


function Home(props) {
    const [check] = useMediaQuery("(min-width: 1025px)")
    const [email,setEmail] = React.useState("");


    const sendEmail = (emailAdress) =>{
      if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(emailAdress)){
        axios({
          method:'post',
          url:"https://toriii.herokuapp.com/email",
          data:{
            email:email
          }

        })
        setEmail("");
         toast.success("email added 😉");
         toast("make sure you star🌟 this project on github");

      }else{
        toast("that's not a valid email! senapi",{
          icon:"🥺"
        });

      }

    }

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
        <Flex  flexDirection={check ? "column" : "column"}>
        <Link to="/OrganizationSearch">
        <Box
          w={check ? "90%" : "90%"}
          margin="5%"
          bgGradient="linear(to-r,  #008793, #00bf72, #a8eb12)"
          borderRadius={25}
          flexDirection="row"
          > 

          <Flex align="center"  flexDirection={check ?  "row"  : "column"}  background="" >
             <div alignSelf="center">
            <Text
                         align="center"
                         ml={check ? "1" : "0"}
                         mt={check ? "0" : "5%"}
                         bgGradient="linear(to-l, #000 ,#333)"
                         bgClip="text"
                           fontSize={check?"6xl":"xl"}
                           fontWeight="extrabold"
    
                >
                     Search  and find  a origination you would love to contriubute 
                </Text>
              
               
                </div>
                <Spacer></Spacer>
               <img src="https://inchilly.sirv.com/Images/jungle-searching-1%20(1).png" height="70%" width="80%"   lazyload="off" />
    
            </Flex>

        </Box>
        </Link>
       <Flex flexDirection={check?"row":"column"}>
        <Box
         bgGradient="linear(to-r,red.100 0%, orange.100 25%, yellow.100 50%)"

          borderRadius={25}
          w={check ? "40%" : "90%"}
          margin="5%"
          >
       <Link to="/OpenProgram">
                      <Flex align="center"  flexDirection={check ?  "row"  : "column-reverse"}  background="" >

             <div alignSelf="center">
            <Text
                         align="center"
                         ml={check ? "1" : "0"}
                         mt={check ? "5" : "5%"}
                         mr={check?"5":"0"}
                         mb={check?"0":"5%"}
                         bgGradient="linear(to-l, #000 ,#333)"
                         bgClip="text"
                           fontSize={check?"6xl":"xl"}

                           fontWeight="extrabold"
    
                >
                  Find all the Open Source events happing this month and Attend what you like
                </Text>
                <div mb="5%"> 

          <img src="https://inchilly.sirv.com/jungle-coming-soon-2.png" height="50%" width="100%"   lazyload="off" />
                </div>
              
               
                </div>
    
            </Flex>


        </Link>
        </Box>
        <Box
          bgGradient="linear(to-r, #7BE0AD,#AEE5D8)"
          borderRadius={25}
          w={check ? "40%" : "90%"}
          margin="5%"
          >
           <Link to="/OpenSourceEvents">


            
                      <Flex align="center"  flexDirection={check ?  "row"  : "column"}  background="" >

             <div alignSelf="center">
            <Text
                         align="center"
                         ml={check ? "1" : "0"}
                         mt={check ? "5" : "5%"}
                         mr={check?"5":"0"}
                         mb={check?"0":"5%"}
                         bgGradient="linear(to-l, #000 ,#333)"
                         bgClip="text"
                           fontSize={check?"6xl":"xl"}

                           fontWeight="extrabold"
    
                >
                 Get a detailed list of all open source program happing out there
                </Text>
                <div mb="5%"> 

          <img src="https://inchilly.sirv.com/Images/jungle-remote-working-3.png" height="50%" width="100%"   lazyload="off" />
                </div>
              
               
                </div>
    
            </Flex>
            </Link>


        </Box>
        </Flex>
        <Divider  bgGradient="linear(to-l, cyan.300 ,#d391fa)" height={1} />
         <Flex flexDirection={check?"row":"column"}>
         <img src="https://inchilly.sirv.com/Images/jungle-upgrade-2%20(1).png" height="50%" width={check ?"40%":"100%"}   lazyload="off" />
          
           <Box textAlign="center">
             <Box mt={check?"20%":"0%"} ml={check?"15%":"0%"}> 
             <Flex direction="column">
              <Text
              
              fontSize="xl"
              mr={check ?"10%" : "0%"}

               > Subscribe to our news letter and get a list of events and programs happening each month  delivered to you</Text>
              <Text mt="5%">
                Spam...? we don't do that here.
              </Text>
             </Flex>
               <Flex flexDirection="row" mt="5%">
             <h1>
               </h1> 
               <Input placeholder="email" ml="4%" width="100%"  type="email" value={email}  onChange={(e)=>(setEmail(e.target.value))}/>
               <Button colorScheme="pink" margin={check?"0%":"0"}  ml="2%" mr="4%" onClick={() => (sendEmail(email))}> Subscribe </Button>
               </Flex>

               {/* <Flex flexDirection="row" ml="6%" mt="1%">

                <Checkbox></Checkbox>
                <Text ml="2%"> Yes, i am a robot 🤖 </Text>
                </Flex> */}
             </Box>
           </Box>
         </Flex>
        </Flex>
        <Toaster/>
        </>
    );
}

export default Home;