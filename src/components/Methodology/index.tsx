import { Flex, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

export function Methodology() {
  return (
    <Flex
      as="section"
      justifyContent="center"
      position="relative"
      padding={['80px 0', '160px 0']}
      bgGradient="linear(90deg,#09090a,#121214)"
    >
      <Flex
        flexDir="column"
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', 'unset']}
      >
        <Heading
          fontWeight="700"
          color="gray.50"
          fontSize={['30px', '48px']}
          lineHeight={['35px', '54px']}
          maxW={['350px', '562px']}
        >
          Método desenhado para acelerar a sua evolução
        </Heading>

        <SimpleGrid mt={['40px', '80px']} spacing="32px" minChildWidth="338px">
          <Grid
            templateColumns="20% 80%"
            templateAreas={`'icon title' 'paragraph paragraph'`}
            position="relative"
            borderWidth="1.5px"
            borderColor="#29292e"
            borderStyle="solid"
            borderRadius="5px"
            bg="gray.900"
            p={['24px 16px', '32px 32px 40px 24px']}
          >
            <Image
              src="/methodology/computer.svg"
              alt="Computer"
              w="64px"
              h="64px"
              gridArea="icon"
            />

            <Heading
              color="gray.50"
              fontWeight="700"
              alignItems="center"
              display="flex"
              ml={['24px', '32px']}
              gridArea="title"
            >
              Prática
            </Heading>

            <Text
              color="gray.100"
              lineHeight="24px"
              fontWeight="400"
              mt="24px"
              gridArea="paragraph"
            >
              Existem muitas formas de estudar programação, mas só existe uma
              forma de aprender: na prática. A teoria só funciona se você souber
              onde e quando aplicar, e são as horas de código que vão te ensinar
              a tomar as melhores decisões.
            </Text>

            <Image
              src="/methodology/arrow.svg"
              alt="Arrow"
              w={['32px', '32px', 'unset']}
              position="absolute"
              top={['unset', 'unset', '64px']}
              right={['unset', 'unset', '-10px']}
              left={['60px', '60px', 'unset']}
              bottom={['4px', '4px', 'unset']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'unset']}
            />
          </Grid>

          <Grid
            templateColumns="20% 80%"
            templateAreas={`'icon title' 'paragraph paragraph'`}
            position="relative"
            borderWidth="1.5px"
            borderColor="#29292e"
            borderStyle="solid"
            borderRadius="5px"
            bg="gray.900"
            p={['24px 16px', '32px 32px 40px 24px']}
          >
            <Image
              src="/methodology/focus.svg"
              alt="Focus"
              w="64px"
              h="64px"
              gridArea="icon"
            />

            <Heading
              color="gray.50"
              fontWeight="700"
              alignItems="center"
              display="flex"
              ml={['24px', '32px']}
              gridArea="title"
            >
              Foco
            </Heading>

            <Text
              color="gray.100"
              lineHeight="24px"
              fontWeight="400"
              mt="24px"
              gridArea="paragraph"
            >
              Programação é um universo infinito, por isso ter foco é o primeiro
              passo para atingir seus objetivos. Saber onde você quer chegar e
              não se distrair com aquilo que não faz sentido para o seu momento,
              é a melhor forma de acelerar sua evolução.
            </Text>

            <Image
              src="/methodology/arrow.svg"
              alt="Arrow"
              w={['32px', '32px', 'unset']}
              position="absolute"
              top={['unset', 'unset', '64px']}
              right={['unset', 'unset', '-10px']}
              left={['60px', '60px', 'unset']}
              bottom={['4px', '4px', 'unset']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'unset']}
            />
          </Grid>

          <Grid
            templateColumns="20% 80%"
            templateAreas={`'icon title' 'paragraph paragraph'`}
            position="relative"
            borderWidth="1.5px"
            borderColor="#29292e"
            borderStyle="solid"
            borderRadius="5px"
            bg="gray.900"
            p={['24px 16px', '32px 32px 40px 24px']}
          >
            <Image
              src="/methodology/group.svg"
              alt="Group"
              w="64px"
              h="64px"
              gridArea="icon"
            />

            <Heading
              color="gray.50"
              fontWeight="700"
              alignItems="center"
              display="flex"
              ml={['24px', '32px']}
              gridArea="title"
            >
              Grupo
            </Heading>

            <Text
              color="gray.100"
              lineHeight="24px"
              fontWeight="400"
              mt="24px"
              gridArea="paragraph"
            >
              Para se destacar é preciso ter habilidades que vão além do código,
              e a melhor forma de dominar essas habilidades também é na prática.
              Ajudar outros devs, se posicionar e receber feedback formam o bom
              profissional.
            </Text>
          </Grid>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
