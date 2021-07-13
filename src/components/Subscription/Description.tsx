import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';

export function Description() {
  return (
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
  );
}
