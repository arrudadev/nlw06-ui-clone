import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export function Scholarship() {
  return (
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
            especialização, onde você vai desenvolver as habilidades técnicas e
            não técnicas mais desejadas pelo mercado. Através de uma grade
            curricular desenhada em parceria com grandes empresas e um método de
            aprendizagem prático, que já ajudou mais de 10 mil alunas e alunos a
            acelerarem na direção dos seus objetivos de carreira.
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
            19/06, participar das aulas e seguir as instruções que vamos liberar
            no dia 18/06.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
