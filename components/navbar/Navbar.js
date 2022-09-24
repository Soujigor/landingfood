import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../images/malilogo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex
      backgroundColor="red"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex
        backgroundColor="red.100"
        display={["none", "none", "flex", "flex"]}
      >
        No Role Models
      </Flex>
      <Flex
        backgroundColor="red.200"
        display={["none", "none", "flex", "flex"]}
      >
        No Role Models
      </Flex>
      <Flex
        justify="center"
        alignItems="center"
        w="100px"
        h="100px"
        cursor="pointer"
      >
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </Flex>
      <Flex
        backgroundColor="red.400"
        display={["none", "none", "flex", "flex"]}
      >
        No Role Models
      </Flex>
      <Flex
        backgroundColor="red.300"
        display={["none", "none", "flex", "flex"]}
      >
        No Role Models
      </Flex>
    </Flex>
  );
};

export default Navbar;
