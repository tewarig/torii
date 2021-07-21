import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box ,Text} from '@chakra-ui/layout';
import React from 'react';
import { Button, Radio, RadioGroup ,Image , useMediaQuery , useColorModeValue } from "@chakra-ui/react"
import toast ,{Toaster} from "react-hot-toast";
import axios from 'axios';





function AddOrg(props) {
    const [value, setValue] = React.useState("")
    const [url,setUrl] = React.useState("");
    const [check] = useMediaQuery("(min-width: 1025px)")
   const  formBackground = useColorModeValue("gray.100","gray.700");



    const onChange = (event) =>{
     setUrl(event.target.value)
    }
    const addThis = () =>{
      if(url === ""){
        toast.error("The url can't be empty 😅")
        return;
      }
      try{
      axios({
      method:'post',
      url: 'https://toriii.herokuapp.com/data',
      data:{
        data:url,
      }
      })
      setUrl("");
         toast.success('Event have been send for review 😉');
       }catch(error){
         toast.error(error);
       }


    }

    return (
       <Box backgroundImage="https://inchilly.sirv.com/Images/jungle-lines-2.png" flexDirection="row" >

        <Box padding={10} align="center"  boxShadow="outline" >

         <Box width={check?"70%":"100%"}  backgroundColor="#fff" background={formBackground} padding={5} borderRadius={25}>
            <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
 
             bgClip="text"
             fontSize={check?"5xl":"2xl"}
             fontWeight="extrabold"
             
            >
            Add Repo / Orgination for Contributors    
             </Text>
            <br/>
           <Input placeholder="Repo / Orgination Link"  value={url} onChange={e => setUrl(e.target.value)}             
/>
              <Text margin={5} >
                Our whole Open Source Community love to support Beginners, but someone who have just started contributing to open source would able to solve issues in this repo or orgination?

              </Text>
              <RadioGroup onChange={setValue} value={value} margin={5}>
              <Radio value="yes" margin={5}>Yes</Radio>
              <Radio value="2" margin={5}>No</Radio>
              </RadioGroup>
              <Text margin={5} >
              Thanks for adding this link.. we would fetch all the info from the repo and add it to the repo.
              </Text>
             
            <Button colorScheme="pink"
            onClick={addThis}
            
              > Submit</Button>
          </Box>
        <Image margin={5} src="https://inchilly.sirv.com/Images/jungle-cake.png" width="30%" height="10%" />
        </Box>
        <Toaster/>


       </Box>
    );
}

export default AddOrg;