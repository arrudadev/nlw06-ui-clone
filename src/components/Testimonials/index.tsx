import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react';

export function Testimonials() {
  return (
    <Flex
      as="section"
      justifyContent="center"
      position="relative"
      padding={['80px 0', '160px 0']}
      bgGradient="linear(90deg,#09090a,#121214)"
    >
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', '0 24px', 'unset']}
      >
        <Box>
          <Heading
            fontWeight="700"
            color="gray.50"
            fontSize={['30px', '48px']}
            lineHeight={['35px', '54px']}
            maxW="389px"
            mb="24px"
          >
            O nosso foco está na sua evolução
          </Heading>

          <Grid
            mt={['24px', '24px', '80px']}
            gap={['24px', '24px', '40px']}
            gridColumn="1"
          >
            <Flex flexDir="column">
              <Text
                fontWeight="400"
                lineHeight="25px"
                fontSize="16px"
                color="gray.50"
                maxW="520px"
                mb={['16px', '16px', '24px']}
              >
                No NLW#5 eu recebi um caminho para trilhar, recebi dicas de como
                caminhar com as próprias pernas. Tanto na parte de tecnologias
                atuais e de mercado quanto em formas de pensar. Obtive contato
                com a comunidade, tive idéias para desenvolver um portfólio
                online e uma apresentação. Acho que faltam palavras para
                experiência. Mas deixou muita coisa anotada aqui no bloquinho de
                notas. #boraprogramar
              </Text>

              <Flex alignItems="center" pb={['24px', '24px', '40px']}>
                <Avatar
                  name="monteiro-alexnadre"
                  src="https://github.com/monteiro-alexandre.png"
                  h={['56px', '56px', '64px']}
                  w={['56px', '56px', '64px']}
                  p="3px"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                />

                <Flex flexDir="column" justifyContent="center" pl="16px">
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    fontWeight="700"
                    color="gray.50"
                  >
                    Alexandre Monteiro
                  </Text>

                  <Text fontSize="16px" fontWeight="400" color="gray.100">
                    @monteiro-alexandre
                  </Text>
                </Flex>
              </Flex>

              <Divider />
            </Flex>

            <Flex flexDir="column">
              <Text
                fontWeight="400"
                lineHeight="25px"
                fontSize="16px"
                color="gray.50"
                maxW="520px"
                mb={['16px', '16px', '24px']}
              >
                Participei da trilha de Node.js e foi muito interessante
                trabalhar com TypeORM junto a um banco de dados relacional em
                ambientes Node.js, visto que só utilizei até então MongoDB no
                Node. A parte de WebSocket foi bem interessante e acredito que
                ira agregar pois é um protocolo a par do HTTP, utilizado por
                grandes aplicações e para determinadas necessidades nos atende
                melhor, como em um chat por exemplo. Espero aplicar estes
                conhecimentos em breve! 🤙
              </Text>

              <Flex alignItems="center" pb={['24px', '24px', '40px']}>
                <Avatar
                  name="monteiro-alexnadre"
                  src="https://github.com/monteiro-alexandre.png"
                  h={['56px', '56px', '64px']}
                  w={['56px', '56px', '64px']}
                  p="3px"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                />

                <Flex flexDir="column" justifyContent="center" pl="16px">
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    fontWeight="700"
                    color="gray.50"
                  >
                    Alexandre Monteiro
                  </Text>

                  <Text fontSize="16px" fontWeight="400" color="gray.100">
                    @monteiro-alexandre
                  </Text>
                </Flex>
              </Flex>

              <Divider />
            </Flex>

            <Flex flexDir="column">
              <Text
                fontWeight="400"
                lineHeight="25px"
                fontSize="16px"
                color="gray.50"
                maxW="520px"
                mb={['16px', '16px', '24px']}
              >
                Fiz a trilha de ReactJs e ouso dizer que aprendi muito mais
                nessa semana do que em outros cursos que já fiz. Agora planejo
                aprender mais sobre e entrar no mercado de trabalho com esse
                conhecimento.
              </Text>

              <Flex alignItems="center" pb={['24px', '24px', '40px']}>
                <Avatar
                  name="monteiro-alexnadre"
                  src="https://github.com/monteiro-alexandre.png"
                  h={['56px', '56px', '64px']}
                  w={['56px', '56px', '64px']}
                  p="3px"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                />

                <Flex flexDir="column" justifyContent="center" pl="16px">
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    fontWeight="700"
                    color="gray.50"
                  >
                    Alexandre Monteiro
                  </Text>

                  <Text fontSize="16px" fontWeight="400" color="gray.100">
                    @monteiro-alexandre
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Box>

        <Box>
          <Grid
            mt={['24px', '24px', '108px']}
            gap={['24px', '24px', '40px']}
            gridColumn="1"
          >
            <Flex flexDir="column">
              <Text
                fontWeight="400"
                lineHeight="25px"
                fontSize="16px"
                color="gray.50"
                maxW="520px"
                mb={['16px', '16px', '24px']}
              >
                Conteúdo sensacional como sempre, e o ultimo é sempre melhor,
                nunca decepciona! Terceiro NLW seguido que vou de Trilha ReactJS
                e não posso dizer que não aprendi algo novo e diferente em cada
                um dos eventos. Acima de tudo me sinto revigorado para aplicar
                esses conhecimentos no dia a dia.
              </Text>

              <Flex alignItems="center" pb={['24px', '24px', '40px']}>
                <Avatar
                  name="monteiro-alexnadre"
                  src="https://github.com/monteiro-alexandre.png"
                  h={['56px', '56px', '64px']}
                  w={['56px', '56px', '64px']}
                  p="3px"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                />

                <Flex flexDir="column" justifyContent="center" pl="16px">
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    fontWeight="700"
                    color="gray.50"
                  >
                    Alexandre Monteiro
                  </Text>

                  <Text fontSize="16px" fontWeight="400" color="gray.100">
                    @monteiro-alexandre
                  </Text>
                </Flex>
              </Flex>

              <Divider />
            </Flex>

            <Flex flexDir="column">
              <Text
                fontWeight="400"
                lineHeight="25px"
                fontSize="16px"
                color="gray.50"
                maxW="520px"
                mb={['16px', '16px', '24px']}
              >
                Fiz a trilha React, foi de muita ajuda, pois acabei de entrar em
                uma empresa que está começando a migrar para essa linguagem, e
                já fez eu ter bons olhares pelos gestores da empresa. Acomapanho
                a Rocketseat desde a Semana OmniStack e sempre me agregou muito
                como profissional.
              </Text>

              <Flex alignItems="center" pb={['24px', '24px', '40px']}>
                <Avatar
                  name="monteiro-alexnadre"
                  src="https://github.com/monteiro-alexandre.png"
                  h={['56px', '56px', '64px']}
                  w={['56px', '56px', '64px']}
                  p="3px"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                />

                <Flex flexDir="column" justifyContent="center" pl="16px">
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    fontWeight="700"
                    color="gray.50"
                  >
                    Alexandre Monteiro
                  </Text>

                  <Text fontSize="16px" fontWeight="400" color="gray.100">
                    @monteiro-alexandre
                  </Text>
                </Flex>
              </Flex>

              <Divider />
            </Flex>

            <Flex flexDir="column">
              <Text
                fontWeight="400"
                lineHeight="25px"
                fontSize="16px"
                color="gray.50"
                maxW="520px"
                mb={['16px', '16px', '24px']}
              >
                O melhor é o avanço que você pode ter. Imagina, em uma semana,
                você aprender e desenvolver um ferramenta do zero, e fora que o
                conhecimento você leva para sempre, isso ninguém tira de você.
              </Text>

              <Flex alignItems="center" pb={['24px', '24px', '40px']}>
                <Avatar
                  name="monteiro-alexnadre"
                  src="https://github.com/monteiro-alexandre.png"
                  h={['56px', '56px', '64px']}
                  w={['56px', '56px', '64px']}
                  p="3px"
                  bgGradient="linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)"
                />

                <Flex flexDir="column" justifyContent="center" pl="16px">
                  <Text
                    fontSize="16px"
                    lineHeight="26px"
                    fontWeight="700"
                    color="gray.50"
                  >
                    Alexandre Monteiro
                  </Text>

                  <Text fontSize="16px" fontWeight="400" color="gray.100">
                    @monteiro-alexandre
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
}
