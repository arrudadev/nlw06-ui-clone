import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export function CommunityEvent() {
  return (
    <Flex
      as="section"
      justifyContent="center"
      padding={['80px 0', '160px 0 134px']}
      bgPosition="top"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage="/astronauts-shaking-hands.png"
      position="relative"
    >
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', '0 24px', 'unset']}
      >
        <Flex flexDir="column">
          <Heading
            fontWeight="700"
            color="gray.50"
            fontSize={['30px', '48px']}
            lineHeight={['35px', '54px']}
            maxW="412px"
            mb={['40px', '40px', '113px']}
          >
            Um evento para toda a comunidade
          </Heading>

          <Text
            fontWeight="400"
            color="green.400"
            maxW="372px"
            fontSize={['16px', '24px']}
            lineHeight="34px"
            mb={['30px', '30px', '42px']}
          >
            O NLW é um evento online com muito código, desafios, networking e um
            único objetivo:
          </Text>

          <Text
            as="strong"
            color="green.400"
            maxW="372px"
            fontSize={['16px', '24px']}
            lineHeight="34px"
          >
            Avançar para o próximo nível.
          </Text>
        </Flex>

        <Box maxW="480px" mt={['40px', '40px', '40px', 'unset']}>
          <Text color="#fff" lineHeight="25px" fontSize="16px" fontWeight="400">
            Sempre com um conteúdo novo a cada edição, você vai descobrir na
            prática uma <Text as="strong">metodologia eficiente</Text> para o
            seu aprendizado em programação, além de conceitos, ferramentas que
            vão impulsionar sua carreira.
          </Text>

          <Text
            color="#fff"
            lineHeight="25px"
            fontSize="16px"
            fontWeight="400"
            mt="25px"
          >
            Um evento intensivo, desenhado pela comunidade para te ajudar a dar
            o próximo passo na sua evolução como programadora ou programador,
            onde vamos direto ao ponto no que você precisa para alcançar o
            próximo nível na sua carreira.
          </Text>

          <Text
            color="#fff"
            lineHeight="25px"
            fontSize="16px"
            fontWeight="400"
            mt="25px"
          >
            Mesmo se você estiver no início da jornada ou começando do zero.
            Haverá uma trilha de conteúdo desenhada para você construir os
            alicerces necessários para decolar em programação.
          </Text>

          <Text
            color="#fff"
            lineHeight="25px"
            fontSize="16px"
            fontWeight="400"
            mt="25px"
          >
            É o momento de toda a comunidade evoluir junto.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
