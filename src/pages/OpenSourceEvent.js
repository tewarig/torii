import React from 'react';
import {Text ,Box ,useColorModeValue} from "@chakra-ui/react";
import Callender from '../Comp/Callender';
import EventCard from '../Comp/EventCard';


function OpenSourceEvent(props) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const date = new Date();
    var n = date.getMonth();
   
    
 
    return (
        <Box backgroundImage="https://inchilly.sirv.com/Images/jungle-lines-2.png">

        
       <Callender></Callender>  
       <EventCard></EventCard>
      <EventCard></EventCard>  
      <EventCard></EventCard>  


       
        </Box>
    );
}

export default OpenSourceEvent;