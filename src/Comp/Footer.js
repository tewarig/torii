import { Box, Divider, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

function Footer(props) {
  const [isLargerThan1880] = useMediaQuery("(min-width: 1880px)");
  const [check] = useMediaQuery("(min-width: 1025px)");
  return (
    <Box mt={5}>
      <Divider bgGradient="linear(to-l, cyan.300 ,#d391fa)" height={1} />
      <Box height="10" align="center">
        <Text margin="5" p={2} fontSize={check ? "3xl" : "xl"}>
          Fuled by ☕ & ❤️
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
