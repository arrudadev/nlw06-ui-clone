import { useEffect, useState } from 'react';
import { FiCheck, FiMail, FiUser } from 'react-icons/fi';

import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useCheckbox,
  useMediaQuery,
} from '@chakra-ui/react';

export function FormWrapper() {
  const [checked, setChecked] = useState(false);
  const [isMinWidthLargerThan375, setIsMinWidthLargerThan375] = useState(false);
  const [isLargerThan375] = useMediaQuery('(min-width: 375px)');

  const { getInputProps, getCheckboxProps } = useCheckbox({
    onChange: () => setChecked(!checked),
    isChecked: checked,
  });

  const chakraCheckBoxInputProps = getInputProps();
  const chakraCheckBoxProps = getCheckboxProps();

  useEffect(() => {
    if (isLargerThan375 !== isMinWidthLargerThan375) {
      setIsMinWidthLargerThan375(isLargerThan375);
    }
  }, [isLargerThan375]);

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

      <Flex as="form" flexDirection="column" w="100%" maxW="384px">
        <Stack spacing={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top="12px"
              ml="3"
              children={<Icon as={FiUser} fontSize="20" color="#3f4f63" />}
            />

            <Input
              type="text"
              placeholder="Nome"
              focusBorderColor="#8257e5"
              bgColor="#0c111a"
              _placeholder={{
                color: '#737380',
                fontSize: '18px',
              }}
              _hover={{
                bgColor: '#0c111a',
              }}
              h={['56px', '64px']}
              w="100%"
              pl="60px"
              borderWidth="0"
              color="#fff"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top="12px"
              ml="3"
              children={<Icon as={FiMail} fontSize="20" color="#3f4f63" />}
            />
            <Input
              type="email"
              placeholder="E-mail"
              focusBorderColor="#8257e5"
              bgColor="#0c111a"
              _placeholder={{
                color: '#737380',
                fontSize: '18px',
              }}
              _hover={{
                bgColor: '#0c111a',
              }}
              h={['56px', '64px']}
              w="100%"
              pl="60px"
              borderWidth="0"
              color="#fff"
            />
          </InputGroup>
        </Stack>

        <Box m={['16px 0', '20px 0']} textAlign="center">
          <Flex as="label" alignItems="center" justifyContent="center" w="100%">
            <input {...chakraCheckBoxInputProps} />

            <Box
              w="20px"
              h="20px"
              borderRadius="5px"
              border="2px solid #52749a"
              bg="#121214"
              mr="8px"
              mt="-3px"
              cursor="pointer"
              _checked={{
                bg: '#04d361',
                borderColor: '#04d361',
              }}
              _hover={{
                borderColor: '#04d361',
              }}
              {...chakraCheckBoxProps}
            >
              {checked && <FiCheck color="black" fontSize="16px" />}
            </Box>

            <Text as="span" fontSize="14px" lineHeight="26px" cursor="pointer">
              Concordo em receber comunicações
            </Text>
          </Flex>
        </Box>

        <Button
          type="submit"
          h="56px"
          fontSize="14px"
          fontWeight="700"
          lineHeight="16px"
          textTransform="uppercase"
          textAlign="center"
          border="none"
          borderRadius="5px"
          color="gray.50"
          bg="#8257e5"
          _hover={{
            bg: '#8257e5',
          }}
        >
          Quero embarcar na missão
        </Button>
      </Flex>

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

      <Image
        src="/icons/binary01.svg"
        alt="Binary"
        display={['none', 'flex']}
        position="absolute"
        top="95px"
        left="-49px"
      />

      <Image
        src="/icons/binary02.svg"
        alt="Binary"
        display={['none', 'flex']}
        position="absolute"
        top="-109px"
        right="-33px"
      />

      <Image
        src="/icons/binary03.svg"
        alt="Binary"
        display={['none', 'flex']}
        position="absolute"
        bottom="38px"
        right="-16px"
      />
    </Flex>
  );
}
