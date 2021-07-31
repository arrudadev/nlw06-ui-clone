import { Divider, Flex, Image, Text } from '@chakra-ui/react';

import { BinaryIcons } from './BinaryIcons';
import { Form } from './Form';

export function FormWrapper() {
  return (
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
      <Text
        as="span"
        display={['none', 'flex']}
        fontSize="32px"
        fontWeight="700"
        lineHeight="40px"
        color="gray.50"
        mb={['24px', '38px']}
      >
        Inscrição gratuita
      </Text>

      <Form />

      <Divider
        display={['none', 'flex']}
        h="1px"
        w="100%"
        borderStyle="none"
        mt="58px"
        bgGradient="linear(90deg, #2b454b, #074b35)"
      />

      <Flex justifyContent="center" alignItems="center" mt="24px">
        <Image src="/icons/security.svg" alt="Security" mr={['8px', '16px']} />

        <Text as="span">Suas informações estão seguras</Text>
      </Flex>

      <BinaryIcons />
    </Flex>
  );
}
