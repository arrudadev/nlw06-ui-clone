import { useState } from 'react';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Editions() {
  const [currentSelectedEdition, setCurrentSelectedEdition] = useState(1);

  return (
    <Flex
      as="section"
      justifyContent="center"
      position="relative"
      padding={['80px 0', '160px 0']}
    >
      <Flex
        flexDir="column"
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', '0 24px', 'unset']}
      >
        <Flex flexDir="row" justifyContent="space-between">
          <Heading
            fontWeight="700"
            color="gray.50"
            fontSize={['30px', '48px']}
            lineHeight={['35px', '54px']}
            maxW="423px"
            mb="24px"
          >
            Missões cumpridas com sucesso
          </Heading>

          <Text
            maxW="445px"
            lineHeight="26px"
            color="gray.50"
            fontSize="16px"
            fontWeight="400"
          >
            A cada edição o NLW avança para o próximo nível, junto com todos os
            participantes. Dessa vez não será diferente. Essa será a melhor
            edição já realizada.
          </Text>
        </Flex>

        <Flex flexDir={['column', 'row']} mt={['40px', '68px']}>
          <Flex
            w="100%"
            maxW="300px"
            flexDir="column"
            display={['none', 'flex']}
          >
            <Box position="relative">
              <Box
                display="flex"
                alignItems="center"
                color="gray.50"
                height={['58px', '58px', '58px', '76px']}
                width="100%"
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
                margin="1px 16px 1px 1px"
                borderRadius="5px 0 0 5px"
                pl="24px"
                transition="all 0.3s ease"
                bg="transparent"
                bgGradient={
                  currentSelectedEdition === 1
                    ? 'linear(90deg,#11251c,rgba(18,18,20,0))'
                    : 'unset'
                }
                border="0"
                _hover={{
                  cursor: 'pointer',
                }}
                _before={{
                  content: '""',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                  height: '1px',
                  zIndex: -100,
                  position: 'absolute',
                  bgGradient: 'linear(-270deg,#323238,rgba(41,41,46,0))',
                }}
                onClick={() => {
                  setCurrentSelectedEdition(1);
                }}
              >
                <Text
                  color={currentSelectedEdition === 1 ? '#04d361' : 'gray.50'}
                >
                  Edição
                </Text>

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28px"
                  color={currentSelectedEdition === 1 ? '#04d361' : 'gray.50'}
                  ml="16px"
                >
                  #01
                </Text>
              </Box>
            </Box>

            <Box position="relative">
              <Box
                display="flex"
                alignItems="center"
                color="gray.50"
                height={['58px', '58px', '58px', '76px']}
                width="100%"
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
                margin="1px 16px 1px 1px"
                borderRadius="5px 0 0 5px"
                pl="24px"
                transition="all 0.3s ease"
                bg="transparent"
                bgGradient={
                  currentSelectedEdition === 2
                    ? 'linear(90deg,#11251c,rgba(18,18,20,0))'
                    : 'unset'
                }
                border="0"
                _hover={{
                  cursor: 'pointer',
                }}
                _before={{
                  content: '""',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                  height: '1px',
                  zIndex: -100,
                  position: 'absolute',
                  bgGradient: 'linear(-270deg,#323238,rgba(41,41,46,0))',
                }}
                onClick={() => {
                  setCurrentSelectedEdition(2);
                }}
              >
                <Text
                  color={currentSelectedEdition === 2 ? '#04d361' : 'gray.50'}
                >
                  Edição
                </Text>

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28px"
                  color={currentSelectedEdition === 2 ? '#04d361' : 'gray.50'}
                  ml="16px"
                >
                  #02
                </Text>
              </Box>
            </Box>

            <Box position="relative">
              <Box
                display="flex"
                alignItems="center"
                color="gray.50"
                height={['58px', '58px', '58px', '76px']}
                width="100%"
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
                margin="1px 16px 1px 1px"
                borderRadius="5px 0 0 5px"
                pl="24px"
                transition="all 0.3s ease"
                bg="transparent"
                bgGradient={
                  currentSelectedEdition === 3
                    ? 'linear(90deg,#11251c,rgba(18,18,20,0))'
                    : 'unset'
                }
                border="0"
                _hover={{
                  cursor: 'pointer',
                }}
                _before={{
                  content: '""',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                  height: '1px',
                  zIndex: -100,
                  position: 'absolute',
                  bgGradient: 'linear(-270deg,#323238,rgba(41,41,46,0))',
                }}
                onClick={() => {
                  setCurrentSelectedEdition(3);
                }}
              >
                <Text
                  color={currentSelectedEdition === 3 ? '#04d361' : 'gray.50'}
                >
                  Edição
                </Text>

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28px"
                  color={currentSelectedEdition === 3 ? '#04d361' : 'gray.50'}
                  ml="16px"
                >
                  #03
                </Text>
              </Box>
            </Box>

            <Box position="relative">
              <Box
                display="flex"
                alignItems="center"
                color="gray.50"
                height={['58px', '58px', '58px', '76px']}
                width="100%"
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
                margin="1px 16px 1px 1px"
                borderRadius="5px 0 0 5px"
                pl="24px"
                transition="all 0.3s ease"
                bg="transparent"
                bgGradient={
                  currentSelectedEdition === 4
                    ? 'linear(90deg,#11251c,rgba(18,18,20,0))'
                    : 'unset'
                }
                border="0"
                _hover={{
                  cursor: 'pointer',
                }}
                _before={{
                  content: '""',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                  height: '1px',
                  zIndex: -100,
                  position: 'absolute',
                  bgGradient: 'linear(-270deg,#323238,rgba(41,41,46,0))',
                }}
                onClick={() => {
                  setCurrentSelectedEdition(4);
                }}
              >
                <Text
                  color={currentSelectedEdition === 4 ? '#04d361' : 'gray.50'}
                >
                  Edição
                </Text>

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28px"
                  color={currentSelectedEdition === 4 ? '#04d361' : 'gray.50'}
                  ml="16px"
                >
                  #04
                </Text>
              </Box>
            </Box>

            <Box position="relative">
              <Box
                display="flex"
                alignItems="center"
                color="gray.50"
                height={['58px', '58px', '58px', '76px']}
                width="100%"
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
                margin="1px 16px 1px 1px"
                borderRadius="5px 0 0 5px"
                pl="24px"
                transition="all 0.3s ease"
                bg="transparent"
                bgGradient={
                  currentSelectedEdition === 5
                    ? 'linear(90deg,#11251c,rgba(18,18,20,0))'
                    : 'unset'
                }
                border="0"
                _hover={{
                  cursor: 'pointer',
                }}
                _before={{
                  content: '""',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                  height: '1px',
                  zIndex: -100,
                  position: 'absolute',
                  bgGradient: 'linear(-270deg,#323238,rgba(41,41,46,0))',
                }}
                onClick={() => {
                  setCurrentSelectedEdition(5);
                }}
              >
                <Text
                  color={currentSelectedEdition === 5 ? '#04d361' : 'gray.50'}
                >
                  Edição
                </Text>

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28px"
                  color={currentSelectedEdition === 5 ? '#04d361' : 'gray.50'}
                  ml="16px"
                >
                  #05
                </Text>
              </Box>
            </Box>

            <Box position="relative">
              <Box
                display="flex"
                alignItems="center"
                color="gray.50"
                height={['58px', '58px', '58px', '76px']}
                width="100%"
                fontSize="16px"
                fontWeight="700"
                lineHeight="26px"
                margin="1px 16px 1px 1px"
                borderRadius="5px 0 0 5px"
                pl="24px"
                transition="all 0.3s ease"
                bg="transparent"
                bgGradient={
                  currentSelectedEdition === 6
                    ? 'linear(90deg,#11251c,rgba(18,18,20,0))'
                    : 'unset'
                }
                border="0"
                _hover={{
                  cursor: 'pointer',
                }}
                _before={{
                  content: '""',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                  height: '1px',
                  zIndex: -100,
                  position: 'absolute',
                  bgGradient: 'linear(-270deg,#323238,rgba(41,41,46,0))',
                }}
                onClick={() => {
                  setCurrentSelectedEdition(6);
                }}
              >
                <Text
                  color={currentSelectedEdition === 6 ? '#04d361' : 'gray.50'}
                >
                  Edição
                </Text>

                <Text
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="28px"
                  color={currentSelectedEdition === 6 ? '#04d361' : 'gray.50'}
                  ml="16px"
                >
                  #06
                </Text>
              </Box>
            </Box>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="center"
            w="100%"
            position="relative"
            minH={['182px', '297px', '405px']}
          >
            <Image
              src={`/editions/nlw${currentSelectedEdition}.png`}
              borderRadius="5px"
            />

            <Image
              src="/editions/play.svg"
              position="absolute"
              h={['46px', '74px']}
              w={['46px', '74px']}
              zIndex="100"
              cursor="pointer"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
