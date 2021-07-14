import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box ,Text} from '@chakra-ui/layout';
import React from 'react';
import { Button, Radio, RadioGroup ,Image , useMediaQuery , useColorModeValue } from "@chakra-ui/react"


function AddEvent(props) {
    const [value, setValue] = React.useState("")
    const [url,setUrl] = React.useState("");
    const [check] = useMediaQuery("(min-width: 1025px)")
   const  formBackground = useColorModeValue("gray.100","gray.700");



    const onChange = (event) =>{
     setUrl(event.target.value)
    }
    const addThis = () =>{

    }

    return (
       <Box backgroundImage="https://inchilly.sirv.com/Images/jungle-lines-2.png" flexDirection="row" >

        <Box padding={10} align="center"   >

         <Box width={check?"70%":"100%"}  backgroundColor="#fff" background={formBackground} padding={5} borderRadius={25}>
            <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
 
             bgClip="text"
             fontSize={check?"5xl":"2xl"}
             fontWeight="extrabold"
             
            >
            Add Event     
             </Text>
            <br/>
           <Input placeholder="Event Link"   onChange={e => setUrl(e.target.value)}             
/>
              <Text margin={5} >
              Thanks for adding this link.. we would fetch all the info from the link and add it. 
              </Text>
             
            <Button colorScheme="pink"
            onClick={addThis}
            
              > Submit</Button>
          </Box>
        <Image margin={5} src="https://inchilly.sirv.com/Images/jungle-glasses.png" width="30%" height="10%" />
        </Box>

       </Box>
    );
}

export default AddEvent;