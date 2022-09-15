import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Foto from "../images/igu1.jpg";

const Main = () => {
  return (
    <Flex
      backgroundColor="green"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingTop="30px"
    >
      <Flex >
        <Stack direction={["column", "column", "row", "row"]} gap="5">
          <Box>
            <Heading>Going to the party have a real good time</Heading>
            <Text>Where the Fuck Are You?</Text>
          </Box>
        <Box>
          <Image src={Foto} alt="foto" />
        </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Main;
