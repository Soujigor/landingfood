import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import Foto from "../images/igu1.jpg";
import Image from "next/image";

const Info = () => {
  return (
    <Flex backgroundColor="blue" padding="10px" >
      <SimpleGrid columns={[1, 1, 2, 2]}>
        <Flex padding="10px" justifyContent="center" alignItems="center">
          Vou até você cozinhar uma comida caseira no conforto da sua casa, de
          acordo com suas preferências. Para isso, preciso que você preencha o
          formulário abaixo, com isso saberei das suas necessidades. Atenção:
          Atualmente, para 20 refeições serão 7 horas por R$ 190. Se a sua
          necessidade for além dessa quantidade de comidas, deixe especificado
          no formulário o número exato que entro em contanto e combinamos
          previamente as diárias necessárias. Como funciona: - Você preenche o
          formulário com todas as informações que preciso saber da sua
          alimentação e detalhes de como você gosta de tudo; - Passo a lista de
          compra específica para a dieta informada e com as quantidades corretas
          para a quantidade de porção dita no formulário; - Agendamos, em
          conjunto, o melhor dia para ir até a sua casa e deixar tudo pronto!
        </Flex>

        <Flex>
          <Image src={Foto} alt="foto" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Info;
