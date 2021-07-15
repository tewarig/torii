import React from 'react';
import {Box ,Select,Text , useColorModeValue}  from "@chakra-ui/react";

function Callender(props) {
    const  formBackground = useColorModeValue("white","gray.700");

    return (
        <div>
            <Box margin={5} backgroundColor="#f0f0f0" padding={5} borderRadius={25} background={formBackground}>
              <Box display="flex" flexDirection="row" align="center">

                  <Text 
                  ml="8"  bgGradient="linear(to-l, cyan.300 ,#d391fa)" bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                  ml="30%"
                  >
                  Open Source Events in  
                  </Text> 
               <Select width="10%" ml={5} mr={5}>
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