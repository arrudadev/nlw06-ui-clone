import { Flex } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="center"
      position="relative"
      pt="80px"
      bgGradient="linear(90deg,#09090a,#121214)"
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', '0 24px', 'unset']}
      >
        <Flex
          justifyContent="space-between"
          flexDir={['column', 'column', 'column', 'row']}
        >
          teste
        </Flex>
      </Flex>
    </Flex>
  );
}
