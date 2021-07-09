import React from "react"
import { Box } from "@chakra-ui/react"
import { FaCross, FaStackExchange } from "react-icons/fa"
 
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <FaCross /> : <FaStackExchange />}
    </Box>
  )
}

export default MenuToggle;