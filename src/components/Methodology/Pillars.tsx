import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

export function Pillars() {
  return (
    <Flex flexDir="column" mt={['80px', '120px']}>
      <Heading
        fontWeight="700"
        fontSize={['20px', '32px']}
        lineHeight={['25px', '42px']}
        maxW={['195px', '312px']}
        mb={['40px', '64px']}
        bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
        bgClip="text"
      >
        Os 3 pilares combinados te darão:
      </Heading>

      <Grid
        gap={['24px', '32px']}
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      >
        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Experiência e portfolio
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Domínio das ferramentas
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Networking eficiente
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Confiança no seu código
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Velocidade de aprendizado
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Carreira acelerada
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Melhores decisões
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Maturidade profissional
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="/methodology/check.svg"
            alt="Check"
            w={['24px', '38px']}
            h={['24px', '38px']}
            mr={['16px', '22px']}
          />

          <Text
            fontSize={['15px', '20px']}
            lineHeight={['20px', '30px']}
            color="gray.50"
          >
            Evolução constante
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
}
