import { useEffect, useState } from 'react';
import { FiCheck, FiMail, FiUser } from 'react-icons/fi';

import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useCheckbox,
  useMediaQuery,
} from '@chakra-ui/react';

export function Form() {
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
  );
}
