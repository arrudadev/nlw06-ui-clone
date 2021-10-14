import { MdKeyboardArrowUp } from 'react-icons/md';

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';

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
          <Flex flexDir="column">
            <Image src="/footer/boosting-people.svg" />

            <Text
              fontSize="14px"
              fontWeight="400"
              lineHeight="24px"
              color="gray.100"
              maxW="180px"
              mt={['24px', '24px', '52px']}
            >
              Rocketseat 2021 <br /> Todos os direitos reservados
            </Text>
          </Flex>

          <Grid
            templateColumns="repeat(2,1fr)"
            gap={['32px', '32px', '32px', '120px']}
            p={['64px 0', '64px 0', '0 0 80px']}
          >
            <Box>
              <Heading
                fontSize="16px"
                fontWeight="700"
                lineHeight="36px"
                color="gray.50"
              >
                Sessões
              </Heading>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                O que é o NLW
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                Método
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                Experts
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                Depoimentos
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                O que é o DoWhile2021
              </Text>
            </Box>

            <Box>
              <Heading
                fontSize="16px"
                fontWeight="700"
                lineHeight="36px"
                color="gray.50"
              >
                Sobre
              </Heading>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                A Rocketseat
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                Direitos autorais
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                Termos de uso
              </Text>

              <Text
                position="relative"
                fontSize="16px"
                fontWeight="400"
                lineHeight="36px"
                width="fit-content"
                transition="all .3s ease"
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.50',
                  _before: {
                    left: '0',
                    right: '0',
                    width: '100%',
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  height: '2px',
                  width: '0',
                  backgroundColor: '#8257e5',
                  transition: 'width .6s cubic-bezier(.25,1,.5,1)',
                }}
              >
                Políticas de privacidade
              </Text>
            </Box>
          </Grid>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="32px 0"
          w="100%"
          _before={{
            content: '""',
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '112px',
            height: '1px',
            width: '100%',
            backgroundColor: '#29292e',
          }}
        >
          <Image src="/footer/logo.svg" />

          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="0"
            background="#202024"
            borderRadius="5px"
            w="48px"
            h="48px"
          >
            <Icon as={MdKeyboardArrowUp} fontSize="24" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
