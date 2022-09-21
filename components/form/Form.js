import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Radio,
  RadioGroup,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";

const formList = [
  [
    {
      label: "Nome Completo",
    },
    {
      label: "Whatsapp",
    },
    {
      label: "Endereço Completo",
    },
  ],
  [
    {
      label: "Conte-me sobre sua rotina",
    },
    {
      label: "Proteínas Preferidas",
    },
    {
      label: "Legumes que não podem faltar",
    },
  ],
  [
    {
      label: "O que você não come de jeito nenhum",
    },
    {
      label: "O prato que não pode faltar",
    },
  ],
];

const radioList = [
  {
    label: "Como pretende armazenar?",
    value: [
      {
        number: 1,
        text: "Porções separadas já montadas para a sua refeição",
      },
      {
        number: 2,
        text: "Porções livres, alimentos cozidos e guardados separadamente",
      },
    ],
  },
  {
    label: "Para armazenamento da comida, você prefere:",
    value: [
      {
        number: 1,
        text: "Utilizar os próprios recipientes",
      },
      {
        number: 2,
        text: "Embalagens levadas por mim (contém custo adicional)",
      },
    ],
  },
  {
    label: "Quantos dias de consumação dos alimentos produzidos?",
    value: [
      {
        number: 1,
        text: "7 dias",
      },
      {
        number: 2,
        text: "10 dias",
      },
      {
        number: 3,
        text: "15 dias",
      },
      {
        number: 4,
        text: "20 dias",
      },
    ],
  },
  {
    label: "Quantas pessoas irão comer dos alimentos produzidos?",
    value: [
      {
        number: 1,
        text: "1 pessoa",
      },
      {
        number: 2,
        text: "2 pessoas",
      },
      {
        number: 3,
        text: "3 pessoas",
      },
      {
        number: 4,
        text: "4 pessoas",
      },
    ],
  },
];

const Form = () => {
  return (
    <Flex
      backgroundColor="yellow.50"
      justifyContent="center"
      alignContent="center"
      direction="column"
      padding="20px"
    >
      {/* {formList.map((formItem) => {
          return (
            <FormControl isRequired key={formItem.label}>
              <FormLabel>{formItem.label}</FormLabel>
              <Textarea resize="none" />
            </FormControl>
          );
        })} */}
      {formList.map((formItem, index) => {
        return (
          <Flex
            key={index}
            w="100%"
            justify="space-between"
            align="center"
            gap="15px"
            direction={["column", "column", "row", "row"]}
          >
            {formItem.map((item, index) => {
              return (
                <FormControl isRequired key={item.label}>
                  <FormLabel>{item.label}</FormLabel>
                  {item.label === "Whatsapp" ? (
                    <Input type="number"></Input>
                  ) : (
                    <Textarea resize="none" type="number" />
                  )}
                </FormControl>
              );
            })}
          </Flex>
        );
      })}

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {radioList.map((radioItem) => {
          return (
            <FormControl isRequired key={radioItem.label} padding="10px">
              <FormLabel>{radioItem.label}</FormLabel>
              <RadioGroup defaultValue="">
                <Stack
                  spacing={5}
                  direction={["column", "column", "row", "row"]}
                >
                  {radioItem.value.map((valueItem, index) => {
                    return (
                      <Radio key={index} value={valueItem.number}>
                        {valueItem.text}
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </FormControl>
          );
        })}
      </SimpleGrid>
      <SimpleGrid padding="10px">
        <FormControl isRequired padding="10px">
          <FormLabel>
            Qual é o melhor dia para agendarmos a ida na sua casa?
          </FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </FormControl>
        <FormControl isRequired padding="10px">
          <FormLabel>
            Ah, para a minha organização preciso saber... Você tem pelo menos
            duas panelas grandes?
          </FormLabel>

          <RadioGroup defaultValue="">
            <Stack spacing={5} direction={["column", "column", "row", "row"]}>
              <Radio value="1">Sim</Radio>
              <Radio value="2">Não</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </SimpleGrid>
      <Flex justifyContent="center" alignItems="center">
        <Button boxShadow="dark-lg" colorScheme="green" size="lg">
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Form;
