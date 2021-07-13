import { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';

import { Subscription } from '../components/Subscription';

export default function Home() {
  const [isMinWidthLargerThan375, setIsMinWidthLargerThan375] = useState(false);
  const [isLargerThan375] = useMediaQuery('(min-width: 375px)');

  useEffect(() => {
    if (isLargerThan375 !== isMinWidthLargerThan375) {
      setIsMinWidthLargerThan375(isLargerThan375);
    }
  }, [isLargerThan375]);

  return (
    <main>
      <Subscription />

      <Flex
        as="section"
        justifyContent="center"
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize={['100% 220px', '100% 400px', 'cover']}
        bgImage="/home/background.png"
        position="relative"
        padding={['304px 0 80px', '432px 0 170px', '140px 0 170px']}
      >
        <Flex justifyContent="space-between" w="1120px" m={['0 24px', 'unset']}>
          <Box>
            <Heading
              as="h3"
              fontSize={['30px', '64px']}
              fontWeight="700"
              lineHeight={['35px', '72px']}
              color="gray.50"
              maxW={['327px', '672px']}
              mb={['24px', '40px']}
            >
              Concorra a 100 bolsas de estudo para o Ignite
            </Heading>

            <Text
              color="gray.50"
              fontWeight="400"
              lineHeight={['25px', '28px']}
              fontSize={['15px', '18px']}
              maxW="600px"
            >
              O Ignite é um programa de aceleração profissional com foco na sua
              especialização, onde você vai desenvolver as habilidades técnicas
              e não técnicas mais desejadas pelo mercado. Através de uma grade
              curricular desenhada em parceria com grandes empresas e um método
              de aprendizagem prático, que já ajudou mais de 10 mil alunas e
              alunos a acelerarem na direção dos seus objetivos de carreira.
            </Text>

            <Text
              color="gray.50"
              fontWeight="400"
              lineHeight={['25px', '28px']}
              fontSize={['15px', '18px']}
              maxW="600px"
              mt={['24px', '28px']}
            >
              Para participar do programa, basta se inscrever no NLW até o dia
              19/06, participar das aulas e seguir as instruções que vamos
              liberar no dia 18/06.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        as="section"
        justifyContent="center"
        position="relative"
        padding={['80px 0', '160px 0 140px']}
      >
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="center"
          w="1120px"
          m={['0 24px', '0 24px', '0 24px', 'unset']}
        >
          <Heading
            as="h3"
            fontSize={['30px', '48px']}
            fontWeight="700"
            lineHeight={['35px', '54px']}
            color="gray.50"
            textAlign={['center', 'center', 'unset']}
            mb={['40px', '40px', '40px', 'unset']}
            maxW={['unset', '357px']}
          >
            Evolua na tecnologia que faz mais sentido para você
          </Heading>

          <Grid
            templateColumns={
              isMinWidthLargerThan375 ? 'unset' : 'repeat(3, 1fr)'
            }
            templateAreas={
              isMinWidthLargerThan375 ? `'one' 'two' 'three'` : 'none'
            }
            gap={isMinWidthLargerThan375 ? 'unset' : '12px'}
          >
            <Box
              display={isMinWidthLargerThan375 ? 'flex' : 'grid'}
              alignItems="center"
              justifyContent="center"
              gridArea={isMinWidthLargerThan375 ? 'one' : 'unset'}
            >
              <Stack
                direction={isMinWidthLargerThan375 ? 'row' : 'column'}
                spacing="12px"
              >
                <Image
                  src="/technologies/react.svg"
                  alt="React"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/nodejs.svg"
                  alt="NodeJs"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/elixir.svg"
                  alt="Elixir"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/javascript.svg"
                  alt="Javascript"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/css.svg"
                  alt="CSS"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />
              </Stack>
            </Box>
            <Box
              display={isMinWidthLargerThan375 ? 'flex' : 'grid'}
              alignItems="center"
              justifyContent="center"
              gridArea={isMinWidthLargerThan375 ? 'two' : 'unset'}
            >
              <Stack
                direction={isMinWidthLargerThan375 ? 'row' : 'column'}
                spacing="12px"
              >
                <Image
                  src="/technologies/nextjs.svg"
                  alt="NextJs"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/expo.svg"
                  alt="Expo"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/html.svg"
                  alt="HTML"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/typescript.svg"
                  alt="Typescript"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />
              </Stack>
            </Box>
            <Box
              display={isMinWidthLargerThan375 ? 'flex' : 'grid'}
              alignItems="center"
              justifyContent="center"
              gridArea={isMinWidthLargerThan375 ? 'three' : 'unset'}
            >
              <Stack
                direction={isMinWidthLargerThan375 ? 'row' : 'column'}
                spacing="12px"
              >
                <Image
                  src="/technologies/phoenix.svg"
                  alt="Phoenix"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/flutter.svg"
                  alt="Flutter"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/express.svg"
                  alt="Express"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/dart.svg"
                  alt="Dart"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/others.svg"
                  alt="Outras"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />
              </Stack>
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </main>
  );
}
