import React from 'react';
import {Flex,Box,Text,Input ,Button} from "@chakra-ui/react";
import {useMediaQuery} from "@chakra-ui/react";
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';

function NewsLetter(props) {
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
        <div>
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
         <Toaster></Toaster>
        
            
        </div>
    );
}

export default NewsLetter;