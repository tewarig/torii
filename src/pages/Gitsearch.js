import React from 'react';
import { Select , Flex , Input , Box , Text, Image ,Grid , Divider , useMediaQuery} from "@chakra-ui/react"
import { FcSearch} from "react-icons/fc";


function Gitsearch(props) {
    const [check] = useMediaQuery("(min-width: 1025px)")

    return (
        <>
        <Box >

        <Flex>
           
            <Input placeholder="🔎Search" margin="1.5%"  />

            <Select placeholder="Language" margin="1.5%">
            <option value="option2">Option 2</option>
            <option value="option1">Option 1</option>
            <option value="option3">Option 3</option>
          </Select>


        </Flex>

        <Grid margin={check?"5%": "10%"}
          ml={check?"5%":"10%"}
          mr={check?"5%":"10%"}

         templateColumns={check ? "repeat(3,90fr)" : "repeat(1,80fr"}>
            <Box   margin="1%"  borderRadius="25px" boxShadow="2xl"  >
                <Image  src='https://github.com/krishdevdb/reseter.css/raw/master/logo.png' background="white" overflow="hidden" align="center" width="100%" height="50%" borderRadius="25px" />
                <Text
                fontSize="3xl"
                fontWeight="extrabold" align="center"
                mt="5%"
                >
                Reseter.css</Text>
                <Divider/>
                <Box margin="2%" flexDirection="row">

                <Text
                 fontWeight="extrabold" 
                 bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                 bgClip="text"
                 align="center"

                 
                >
                    <>
                   || HTML ||    
                    </>
                    <>
                     CSS  ||  
                    </>
                    <>
                     C++  ||
                    </>




                </Text>
               
                </Box>
                <Divider/>
                <br/>
                <Text
                fontWeight="bold" align="center"
                
                
                > Reseter.css is an awesome CSS boilerplate for a website. It is a great tool for any web designer. Reseter.css resets all the premade styles by the browser. It normalizes the browser\'s stylesheet for a better cross-browser experience. </Text>



            </Box>
           
           
           
            <Box   margin="1%"  borderRadius="25px" boxShadow="2xl"  >
                <Image  src='https://github.com/krishdevdb/reseter.css/raw/master/logo.png' background="white" overflow="hidden" align="center" width="100%" height="50%" borderRadius="25px" />
                <Text
                fontSize="3xl"
                fontWeight="extrabold" align="center"
                mt="5%"
                >
                Reseter.css</Text>
                <Divider/>
                <Box margin="2%" flexDirection="row">

                <Text
                 fontWeight="extrabold" 
                 bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                 bgClip="text"
                 align="center"

                 
                >
                    <>
                   || HTML ||    
                    </>
                    <>
                     CSS  ||  
                    </>
                    <>
                     C++  ||
                    </>




                </Text>
               
                </Box>
                <Divider/>
                <br/>
                <Text
                fontWeight="bold" align="center"
                
                
                > Reseter.css is an awesome CSS boilerplate for a website. It is a great tool for any web designer. Reseter.css resets all the premade styles by the browser. It normalizes the browser\'s stylesheet for a better cross-browser experience. </Text>



            </Box>
            
                        <Box   margin="1%"  borderRadius="25px" boxShadow="2xl"  >
                <Image  src='https://github.com/krishdevdb/reseter.css/raw/master/logo.png' background="white" overflow="hidden" align="center" width="100%" height="50%" borderRadius="25px" />
                <Text
                fontSize="3xl"
                fontWeight="extrabold" align="center"
                mt="5%"
                >
                Reseter.css</Text>
                <Divider/>
                <Box margin="2%" flexDirection="row">

                <Text
                 fontWeight="extrabold" 
                 bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                 bgClip="text"
                 align="center"
                 
                 
                 >
                    <>
                   || HTML ||    
                    </>
                    <>
                     CSS  ||  
                    </>
                    <>
                     C++  ||
                    </>




                </Text>
               
                </Box>
                <Divider/>
                <br/>
                <Text
                fontWeight="bold" align="center"
                
                
                > Reseter.css is an awesome CSS boilerplate for a website. It is a great tool for any web designer. Reseter.css resets all the premade styles by the browser. It normalizes the browser\'s stylesheet for a better cross-browser experience. </Text>



            </Box>
            <Box   margin="1%"  borderRadius="25px" boxShadow="2xl"  >
                <Image  src='https://github.com/krishdevdb/reseter.css/raw/master/logo.png' background="white" overflow="hidden" align="center" width="100%" height="50%" borderRadius="25px" />
                <Text
                fontSize="3xl"
                fontWeight="extrabold" align="center"
                mt="5%"
                >
                Reseter.css</Text>
                <Divider/>
                <Box margin="2%" flexDirection="row">

                <Text
                 fontWeight="extrabold" 
                 bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                 bgClip="text"
                 align="center"

                 
                 >
                    <>
                   || HTML ||    
                    </>
                    <>
                     CSS  ||  
                    </>
                    <>
                     C++  ||
                    </>




                </Text>
               
                </Box>
                <Divider/>
                <br/>
                <Text
                fontWeight="bold" align="center"
                
                
                > Reseter.css is an awesome CSS boilerplate for a website. It is a great tool for any web designer. Reseter.css resets all the premade styles by the browser. It normalizes the browser\'s stylesheet for a better cross-browser experience. </Text>



            </Box>
                      
           
            
            

        </Grid>
            
     </Box>
        </>
    );
}

export default Gitsearch;