import React from 'react';
import {Box ,Select,Text , useColorModeValue,useMediaQuery}  from "@chakra-ui/react";

function Callender({month,changeMonth}) {
    const  formBackground = useColorModeValue("white","gray.700");
    const [check] = useMediaQuery("(min-width: 1025px)")


    return (
        <div>
            <Box margin={check ? 5 : 1} backgroundColor="#f0f0f0" padding={check ? 5 : 0}  background={formBackground}>
              <Box display="flex" flexDirection={check ? "row" : "column"} align="center">

                  <Text 
                  ml="8"  bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                  ml={check ? "30%" : "0%"}
                  >
                  Open Source Events in  
                  </Text> 
               <Select width={check ?"10%" : "50%"} ml={check ? 5 : "25%"} mr={5} mb="3%"  value={month} onChange={changeMonth}>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="December">December</option>                   
                </Select> 
              </Box>
            <Box>

            </Box>
            
        </Box>
        </div>
    );
}

export default Callender;