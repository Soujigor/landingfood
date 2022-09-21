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

const formList = [
  {
    label: "Nome Completo",
  },
  {
    label: "Whatsapp",
  },
  {
    label: "Endereço Completo",
  },
  {
    label: "Conte-me sobre sua rotina",
  },
  {
    label: "Proteínas Preferidas",
  },
  {
    label: "Legumes que não podem faltar",
  },
  {
    label: "O que você não come de jeito nenhum",
  },
  {
    label: "O prato que não pode faltar",
  },
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
      backgroundColor="yellow"
      justifyContent="center"
      alignContent="center"
    >
      <Flex flexDirection="column" width="50%">
        {formList.map((formItem) => {
          return (
            <FormControl isRequired key={formItem.label}>
              <FormLabel>{formItem.label}</FormLabel>
              <Textarea resize="none" />
            </FormControl>
          );
        })}
      </Flex>

      {/* <Flex>
        {radioList.map((radioItem) => {
          return (
            <FormControl isRequired key={radioItem.label}>
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
      </Flex> */}
      {/* <Flex>
        <FormControl isRequired>
          <FormLabel>
            Qual é o melhor dia para agendarmos a ida na sua casa?
          </FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </FormControl>
        <FormControl isRequired>
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
      </Flex> */}
    </Flex>
  );
};

export default Form;
