import { Flex, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

export function Schedule() {
  return (
    <Flex
      as="section"
      flexDir="column"
      alignItems="center"
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
        <Heading
          fontWeight="700"
          color="gray.50"
          fontSize={['30px', '48px']}
          lineHeight={['35px', '54px']}
          maxW="420px"
          mb={['40px', '40px', '80px']}
        >
          Cronograma oficial da nossa missão
        </Heading>

        <SimpleGrid spacing="28px" minChildWidth="354px">
          <Flex
            flexDir="column"
            borderRadius="5px"
            border="1.5px solid #29292e"
            p="24px 24px 32px"
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              mb="24px"
              bg="#29292e"
              h="28px"
              maxW="111px"
              borderRadius="5px"
            >
              <Text
                fontSize="16px"
                fontWeight="700"
                lineHeight="16px"
                color="#fff"
              >
                20 de junho
              </Text>
            </Flex>

            <Grid gap="16px">
              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  19h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Encontro ao vivo
                </Text>
              </Flex>

              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  20h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Aula prática 01
                </Text>
              </Flex>
            </Grid>

            <Image
              src="/schedule/arrow.svg"
              alt="Arrow"
              w={['32px', '32px', 'unset']}
              position="absolute"
              top={['unset', 'unset', '40px']}
              right={['unset', 'unset', '-10px']}
              left={['60px', '60px', 'unset']}
              bottom={['4px', '4px', 'unset']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'unset']}
            />
          </Flex>

          <Flex
            flexDir="column"
            borderRadius="5px"
            border="1.5px solid #29292e"
            p="24px 24px 32px"
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              mb="24px"
              bg="#29292e"
              h="28px"
              maxW="111px"
              borderRadius="5px"
            >
              <Text
                fontSize="16px"
                fontWeight="700"
                lineHeight="16px"
                color="#fff"
              >
                20 de junho
              </Text>
            </Flex>

            <Grid gap="16px">
              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  19h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Encontro ao vivo
                </Text>
              </Flex>

              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  20h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Aula prática 01
                </Text>
              </Flex>
            </Grid>

            <Image
              src="/schedule/arrow.svg"
              alt="Arrow"
              w={['32px', '32px', 'unset']}
              position="absolute"
              top={['unset', 'unset', '40px']}
              right={['unset', 'unset', '-10px']}
              left={['60px', '60px', 'unset']}
              bottom={['4px', '4px', 'unset']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'unset']}
            />
          </Flex>

          <Flex
            flexDir="column"
            borderRadius="5px"
            border="1.5px solid #29292e"
            p="24px 24px 32px"
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              mb="24px"
              bg="#29292e"
              h="28px"
              maxW="111px"
              borderRadius="5px"
            >
              <Text
                fontSize="16px"
                fontWeight="700"
                lineHeight="16px"
                color="#fff"
              >
                20 de junho
              </Text>
            </Flex>

            <Grid gap="16px">
              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  19h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Encontro ao vivo
                </Text>
              </Flex>

              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  20h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Aula prática 01
                </Text>
              </Flex>

              <Image
                src="/schedule/arrow.svg"
                alt="Arrow"
                w={['32px', '32px', 'unset']}
                position="absolute"
                top={['unset', 'unset', '40px']}
                right={['unset', 'unset', '-10px']}
                left={['60px', '60px', 'unset']}
                bottom={['4px', '4px', 'unset']}
                transform={['rotate(90deg)', 'rotate(90deg)', 'unset']}
              />
            </Grid>
          </Flex>

          <Flex
            flexDir="column"
            borderRadius="5px"
            border="1.5px solid #29292e"
            p="24px 24px 32px"
            position="relative"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              mb="24px"
              bg="#29292e"
              h="28px"
              maxW="111px"
              borderRadius="5px"
            >
              <Text
                fontSize="16px"
                fontWeight="700"
                lineHeight="16px"
                color="#fff"
              >
                20 de junho
              </Text>
            </Flex>

            <Grid gap="16px">
              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  19h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Encontro ao vivo
                </Text>
              </Flex>

              <Flex>
                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="500"
                  lineHeight="18px"
                  pr="16px"
                  color="#737380"
                  borderRight="1px solid #29292e"
                >
                  20h00
                </Text>

                <Text
                  display="inline-block"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="18px"
                  pl="16px"
                  color="#737380"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                  bgClip="text"
                >
                  Aula prática 01
                </Text>
              </Flex>
            </Grid>

            <Image
              src="/schedule/arrow.svg"
              alt="Arrow"
              w={['32px', '32px', 'unset']}
              position="absolute"
              top={['unset', 'unset', '40px']}
              right={['unset', 'unset', '-10px']}
              left={['60px', '60px', 'unset']}
              bottom={['4px', '4px', 'unset']}
              transform={['rotate(90deg)', 'rotate(90deg)', 'unset']}
            />
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
