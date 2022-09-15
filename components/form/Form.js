import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Textarea,
  Stack,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Flex
      backgroundColor="yellow"
      justifyContent="center"
      alignContent="center"
    >
      <Stack direction={["column", "column", "row", "row"]} spacing="50px">
        <FormControl isRequired>
          <FormLabel>Nome Completo</FormLabel>
          <Input />
        </FormControl>
        <FormControl isRequired>
          <NumberInput>
            <FormLabel>Whatsapp</FormLabel>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Endereço Completo</FormLabel>
          <Input />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Conte-me sobre sua rotina</FormLabel>
          <Textarea resize="none"/>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Form;
