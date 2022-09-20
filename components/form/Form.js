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
  Radio,
  RadioGroup,
  Grid,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Flex
      backgroundColor="yellow"
      justifyContent="center"
      alignContent="center"
    >
      <Grid padding="20px" flexDirection={["column", "column", "row", "row"]} templateColumns="repeat(4, 1fr)" gap="50px">
        <FormControl isRequired>
          <FormLabel>Nome Completo</FormLabel>
          <Textarea resize="none" />
        </FormControl>
        <FormControl isRequired>
          <NumberInput>
            <FormLabel>Whatsapp</FormLabel>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Endereço Completo</FormLabel>
          <Textarea resize="none" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Conte-me sobre sua rotina</FormLabel>
          <Textarea resize="none" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Proteínas Preferidas</FormLabel>
          <Textarea resize="none" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Legumes que não podem faltar</FormLabel>
          <Textarea resize="none" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>O que você não come de jeito nenhum</FormLabel>
          <Textarea resize="none" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>O prato que não pode faltar</FormLabel>
          <Textarea resize="none" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Como pretende armazenar?</FormLabel>
          <RadioGroup defaultValue="">
            <Stack spacing={5} direction={["column", "column", "row", "row"]}>
              <Radio value="1">
                Porções separadas já montadas para a sua refeição
              </Radio>
              <Radio value="2">
                Porções livres, alimentos cozidos e guardados separadamente
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Para armazenamento da comida, você prefere:</FormLabel>
          <RadioGroup defaultValue="">
            <Stack spacing={5} direction={["column", "column", "row", "row"]}>
              <Radio value="1">Utilizar os próprios recipientes</Radio>
              <Radio value="2">
                Embalagens levadas por mim (contém custo adicional)
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>
            Quantos dias de consumação dos alimentos produzidos?
          </FormLabel>
          <RadioGroup defaultValue="">
            <Stack spacing={5} direction={["column", "column", "row", "row"]}>
              <Radio value="1">7 dias</Radio>
              <Radio value="2">10 dias</Radio>
              <Radio value="3">15 dias</Radio>
              <Radio value="4">20 dias</Radio>
              <Radio value="5">
                Outro
              </Radio>
                <Textarea />
            </Stack>
          </RadioGroup>
        </FormControl>
      </Grid>
    </Flex>
  );
};

export default Form;
