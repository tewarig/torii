import React from "react";
import ToriLogo from "../assets/iconRm.png";
import {
  Text,
  Image,
  Spacer,
  IconButton,
  VStack,
  Flex,
  useMediaQuery,
  Divider,
  Grid,
  GridItem,
  Box,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";

import Navbar from "../Comp/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { FcBinoculars } from "react-icons/fc";
import axios from "axios";
import NewsLetter from "../Comp/NewsLetter";

function Home(props) {
  const [check] = useMediaQuery("(min-width: 1025px)");
  const [isLargerThan200] = useMediaQuery("(min-width: 200px)");
  const [isLargerThan1880] = useMediaQuery("(min-width: 1880px)");
  return (
    <>
      <Flex
        align="center"
        flexDirection={check ? "row" : "column"}
        height={check ? "100vh" : "max-content"}
        marginBottom={check ? "0%" : "10%"}
      >
        <div alignSelf="center">
          <Text
            align="center"
            ml={check ? "150" : "0"}
            mt={check ? "-300" : "0"}
            bgGradient="linear(to-l, cyan.300 ,#d391fa)"
            bgClip="text"
            fontSize={isLargerThan1880 ? "8xl" : "9xl"}
            // fontSize="7xl"
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
            fontSize={isLargerThan1880 ? "5xl" : "3xl"}
            fontWeight="extrabold"
          >
            Your Gateway to
          </Text>
          <Text
            ml={check ? "150" : "3"}
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize={isLargerThan1880 ? "5xl" : "5xl"}
            fontWeight="extrabold"
          >
            Open Source
          </Text>
        </div>
        {check == false && (
          <img
            src="https://inchilly.sirv.com/Images/jungle1.png"
            width="90%"
            lazyload="off"
            style={{ marginLeft: "5%", marginBottom: "5%" }}
          />
        )}
        {check == true && (
          <img
            src="https://inchilly.sirv.com/Images/jungle1.png"
            width="50%"
            lazyload="off"
            style={{ marginLeft: "5%" }}
          />
        )}
      </Flex>
      <Flex flexDirection={check ? "column" : "column"}>
        <Flex flexDirection={check ? "row" : "column"}>
          <Box
            bgGradient="linear(to-r,red.100 0%, orange.100 25%, yellow.100 50%)"
            borderRadius={25}
            w={check ? "40%" : "90%"}
            margin="5%"
          >
            <Link to="/OpenSourceEvents">
              <Flex
                align="center"
                flexDirection={check ? "row" : "column-reverse"}
                background=""
              >
                <div alignSelf="center">
                  <Text
                    align="center"
                    ml={check ? "1" : "0"}
                    mt={check ? "5" : "5%"}
                    mr={check ? "5" : "0"}
                    mb={check ? "0" : "5%"}
                    bgGradient="linear(to-l, #000 ,#333)"
                    bgClip="text"
                    fontSize={check ? "3xl" : "xl"}
                    fontWeight="extrabold"
                    p={2}
                  >
                    Find all the Open Source events happing this month and
                    Attend what you like
                  </Text>

                  <div mb="5%">
                    <img
                      src="https://inchilly.sirv.com/jungle-coming-soon-2.png"
                      height="50%"
                      width="60%"
                      lazyload="off"
                    />
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
            <Link to="/OpenProgram">
              <Flex
                align="center"
                flexDirection={check ? "row" : "column"}
                background=""
              >
                <div alignSelf="center">
                  <Text
                    align="center"
                    ml={check ? "1" : "0"}
                    mt={check ? "5" : "5%"}
                    mr={check ? "5" : "0"}
                    mb={check ? "0" : "5%"}
                    bgGradient="linear(to-l, #000 ,#333)"
                    bgClip="text"
                    fontSize={check ? "3xl" : "xl"}
                    fontWeight="extrabold"
                    p={2}
                  >
                    Get a detailed list of all open source program happing out
                    there
                  </Text>

                  <div>
                    <img
                      src="https://inchilly.sirv.com/Images/jungle-remote-working-3.png"
                      width="60%"
                      lazyload="off"
                    />
                  </div>
                </div>
              </Flex>
            </Link>
          </Box>
        </Flex>
        <Link to="/OrganizationSearch">
          <Box
            w={check ? "90%" : "90%"}
            margin="5%"
            bgGradient="linear(to-r,  #008793, #00bf72, #a8eb12)"
            borderRadius={25}
            flexDirection="row"
          >
            <Flex
              align="center"
              flexDirection={check ? "row" : "column"}
              background=""
            >
              <div alignSelf="center">
                <Text
                  align="center"
                  ml={check ? "1" : "0"}
                  mt={check ? "0" : "5%"}
                  bgGradient="linear(to-l, #000 ,#333)"
                  bgClip="text"
                  fontSize={check ? "4xl" : "xl"}
                  fontWeight="extrabold"
                >
                  Search and find a origination you would love to contriubute
                </Text>
              </div>
              <Spacer></Spacer>
              <img
                src="https://inchilly.sirv.com/Images/jungle-searching-1%20(1).png"
                height="70%"
                width="60%"
                lazyload="off"
              />
            </Flex>
          </Box>
        </Link>
        <NewsLetter></NewsLetter>
      </Flex>
      <Toaster />
    </>
  );
}

export default Home;
