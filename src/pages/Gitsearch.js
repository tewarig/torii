import React from 'react';
import { Select , Flex , Input , Box , Text, Image ,Grid , Divider , useMediaQuery, Spacer }from "@chakra-ui/react"
import { FcSearch} from "react-icons/fc";

import axios from 'axios';


import Card from "../Comp/Card";

function Gitsearch(props) {
    const [check] = useMediaQuery("(min-width: 1025px)")
    const [data ,setData]  = React.useState(null);
    const getata = async() =>{
        var res = await axios.get('https://toriii.herokuapp.com/org')
        setData(res.data);
    }
    React.useState(getata,[]);


    return (
        <>
        <Box >
        <Flex align="center"  flexDirection={check ?  "row"  : "column"}  background="" >
        <div alignSelf="center"  position="absolute" >
        <Text
                     align="center"
                     ml={check ? "150" : "0"}
                     mt={check ? "-300" : "10"}
                     bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                     bgClip="text"
                       fontSize="3xl"
                       fontWeight="extrabold"
                    //    position="absolute"

            >
               Your first Open Source Contribution made easy 
            </Text>
            <Text
                     align="center"
                     ml={check ? "150" : "0"}
                     mt={check ? "100" : "10"}
                     bgGradient="linear(to-l, #7928CA,#FF0080)"
                       bgClip="text"
                       fontSize="xl"
                       fontWeight="extrabold"
                    //    position="absolute"
                       >
                            Select a language or technology and start contributing : ) to
            </Text>
            <Text
                     align="center"
                     ml={check ? "150" : "0"}
                     mt={check?"0":"10"}
                     bgGradient="linear(to-l, #7928CA,#FF0080)"
                     
                     bgClip="text"
                     fontSize="5xl"
                     fontWeight="extrabold"
                     >
                 Open Source
            </Text>
            </div>
            <Spacer></Spacer>
           <img src="https://inchilly.sirv.com/Images/jungle-searching-1.png" height="70%" width={check?"50%":"100%"}   lazyload="off" />

        </Flex>
        <Flex>
           
            <Input placeholder="🔎Search" margin="1.5%"  />

            <Select placeholder="Language" margin="1.5%">
            <option value="option2">Option 2</option>
            <option value="option1">Option 1</option>
            <option value="option3">Option 3</option>
          </Select>


        </Flex>
     {data ?  
     <>
      <Grid margin={check?"5%": "10%"}
          ml={check?"5%":"10%"}
          mr={check?"5%":"10%"}

         templateColumns={check ? "repeat(3,90fr)" : "repeat(1,80fr"}>  
         {
          data.map(x =>
            
            <Card  
            ImgUrl={x.imageSrc} 
            MainText={x.name}
            Lang={x.tags}
          Des={x.description}
          Linki={x.projectLink}
          
          >

         </Card> 
         )
         } 
        </Grid>

     </>     
     :
    <>
    Loading....
    </>
     }
       
            
     </Box>
        </>
    );
}

export default Gitsearch;