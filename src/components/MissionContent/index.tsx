import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

export function MissionContent() {
  return (
    <Flex
      as="section"
      justifyContent="center"
      position="relative"
      padding={['80px 0', '160px 0']}
      bgGradient="linear(90deg,#09090a,#121214)"
    >
      <Flex
        flexDir="column"
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', '0 24px', 'unset']}
      >
        <Heading
          as="h3"
          color="gray.50"
          fontWeight="700"
          fontSize={['30px', '48px']}
          lineHeight={['35px', '54px']}
          maxW={['327px', '616px']}
          mb={['40px', '40px', '80px']}
        >
          Ao embarcar nessa missão, você vai ter acesso a:
        </Heading>

        <Grid
          templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
          gap={['16px', '16px', '16px', '32px']}
        >
          <Flex flexDir="column" borderRadius="5px" bg="gray.900">
            <Flex
              alignItems="center"
              h="78px"
              position="relative"
              p="20px 24px"
              border="1px solid #3f2e68"
              borderRadius="5px 5px 0 0"
              bgGradient="linear(3.65deg,#1d1929,#121214 100.4%)"
            >
              <Image
                src="/mission-content/cellphone.svg"
                w="40px"
                h="40px"
                mr="16px"
              />

              <Heading
                as="h4"
                color="gray.50"
                fontWeight="700"
                fontSize="20px"
                lineHeight="30px"
              >
                Uma aplicação completa
              </Heading>
            </Flex>

            <Box
              p="24px 32px"
              border="1px solid #29292e"
              borderTop="unset"
              borderRadius="0 0 5px 5px"
            >
              <Text
                color="gray.50"
                fontSize="16px"
                fontWeight="400"
                lineHeight="25px"
              >
                Durante o evento, vamos desenvolver uma aplicação completa em
                cada trilha, para você entender como grandes empresas estão
                utilizando as ferramentas no dia-a-dia, além de expandir o seu
                portfólio e conhecer novas tecnologias na prática.
              </Text>
            </Box>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}
