import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Flex
        as="section"
        justifyContent="center"
        h={['auto', '100vh']}
        pt={['24px', 'unset']}
        bgImage="/home/hero.png"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="top"
        overflow="hidden"
      >
        <Flex
          justifyContent="space-between"
          m={['unset', '0 24px']}
          w={['100%', '1120px']}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            padding={['0 24px', 'unset']}
          >
            <Image src="/logo.svg" alt="Logo" w={['256px', '345px', 'unset']} />

            <Text
              as="span"
              display={['none', 'flex']}
              fontSize="18px"
              fontWeight="500"
              lineHeight="16px"
              color="green.500"
              mt={['40px', '80px']}
            >
              Edição especial | Conteúdo inédito
            </Text>

            <Heading
              as="h1"
              fontSize={['30px', '64px']}
              fontWeight="700"
              m="40px 0 16px"
              color="gray.50"
              lineHeight={['35px', '64px']}
              maxW="536px"
            >
              Juntos para <br /> o próximo nível.
            </Heading>

            <Heading
              as="h2"
              fontSize={['15px', '18px']}
              fontWeight="400"
              color="gray.50"
              lineHeight={['25px', '28px']}
              maxW={['327px', '505px']}
            >
              Um evento para dar o próximo passo na sua <br /> evolução como
              programadora ou programador.
            </Heading>

            <HStack
              spacing={['8px', '8px', '80px']}
              mt={['32px', '64px']}
              maxW={['327px', '327px', 'unset']}
            >
              <Flex alignItems="center">
                <Image
                  src="/icons/calendar.svg"
                  alt="Calendar"
                  w={['48px', 'unset']}
                  h={['48px', 'unset']}
                />

                <Text
                  as="span"
                  fontSize={['15px', '24px']}
                  fontWeight="500"
                  lineHeight={['20px', '28px']}
                  color="gray.50"
                  ml={['16px', '32px']}
                >
                  20 a 27 <br /> de junho
                </Text>
              </Flex>

              <Flex alignItems="center">
                <Image
                  src="/icons/player.svg"
                  alt="Calendar"
                  w={['48px', 'unset']}
                  h={['48px', 'unset']}
                />

                <Text
                  as="span"
                  fontSize={['15px', '24px']}
                  fontWeight="500"
                  lineHeight={['20px', '28px']}
                  color="gray.50"
                  ml={['16px', '32px']}
                >
                  Online <br /> e gratuito
                </Text>
              </Flex>
            </HStack>
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            w="100%"
            maxW={['unset', '340px', '380px', '480px']}
            bgGradient="linear(180deg, rgba(122, 76, 229, 0.1), rgba(4, 211, 97, 0.1))"
            padding="32px 24px 24px"
            mt={['28px', 'unset']}
          >
            teste
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
