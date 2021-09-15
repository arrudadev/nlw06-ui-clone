import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { MissionCard } from './MissionCard';

export function Missions() {
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
        flexDir={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        w="1120px"
        m={['0 24px', '0 24px', '0 24px', 'unset']}
      >
        <Flex
          flexDir={['column', 'column', 'column', 'row']}
          justifyContent="space-between"
          w="1120px"
          m={['0 24px', '0 24px', '0 24px', 'unset']}
        >
          <Heading
            fontWeight="700"
            color="gray.50"
            fontSize={['30px', '48px']}
            lineHeight={['35px', '54px']}
            maxW="441px"
          >
            Para diferentes objetivos, diferentes missões
          </Heading>

          <Text
            maxW={['420px', '420px', '420px', '544px']}
            pt={['24px', '24px', '24px', '40px']}
            position="relative"
            lineHeight="25px"
            fontSize="16px"
            fontWeight="400"
            color="gray.50"
            _before={{
              content: '""',
              display: 'flex',
              width: '50px',
              height: '1px',
              top: '0',
              left: '0',
              position: 'absolute',
              backgroundColor: '#3c3c42',
            }}
          >
            O NLW foi desenhado para leva-lo até o seu próximo nível,
            independente do caminho que você escolher e do seu nível atual. Ao
            fazer a sua inscrição, você poderá escolher e embarcar na missão que
            está mais alinhada com o seu momento e objetivo e acelerar na
            direção certa.
          </Text>
        </Flex>
      </Flex>

      <SimpleGrid
        mt="128px"
        w="1120px"
        minChildWidth="350px"
        spacing="86px 32px"
      >
        <MissionCard
          borderTopColor="linear-gradient(90deg,#0389ff,rgba(3,137,255,.2))"
          color="#4763ff"
          icon="origin.svg"
          title="Origin"
          category="Foundation"
          description="Se você está começando do zero e quer descobrir o caminho para evoluir
          com velocidade na direção certa, essa é a missão certa para você."
        />

        <MissionCard
          borderTopColor="linear-gradient(90deg,#714dc6,rgba(113,77,198,.2))"
          color="#8257e5"
          icon="discover.svg"
          title="Discover"
          category="Foundation"
          description="Se você quer dominar os fundamentos e construir os alicerces necessários para
          decolar como programador ou programadora, essa é a sua missão."
        />

        <MissionCard
          borderTopColor="linear-gradient(90deg,#2ac7e3,rgba(42,199,227,.2))"
          color="#2ac7e3"
          icon="react.svg"
          title="ReactJs"
          category="Front End"
          description="Se o seu objetivo está alinhado com o front-end, e você deseja construir interfaces
          modernas e reativas na web utilizando uma biblioteca modular e escalável, essa é a sua missão."
        />

        <MissionCard
          borderTopColor="linear-gradient(90deg,#8cc84b,rgba(140,200,75,.2))"
          color="#8cc84b"
          icon="node.svg"
          title="NodeJs"
          category="Back End"
          description="Se o seu objetivo está alinhado com o back-end, e você deseja construir arquiteturas
          escaláveis e simples para a web utilizando uma linguagem flexível e popular, essa é a sua missão."
        />

        <MissionCard
          borderTopColor="linear-gradient(90deg,#b13af0,rgba(177,58,240,.2))"
          color="#b13af0"
          icon="elixir.svg"
          title="Elixir"
          category="Back End"
          description="Se o seu objetivo está alinhado com o back-end, e você deseja construir aplicações distribuídas,
          escaláveis e tolerantes a falhas utilizando programação funcional, essa é a sua missão."
        />

        <MissionCard
          borderTopColor="linear-gradient(90deg,#4763ff,rgba(71,99,255,.2))"
          color="#4763ff"
          icon="react-native.svg"
          title="React Native"
          category="Mobile"
          description="Se o seu objetivo está alinhado com desenvolvimento mobile, e você deseja construir aplicações
          modernas tanto para iOS quanto para Android de forma nativa, essa a sua missão."
        />

        <MissionCard
          borderTopColor="linear-gradient(90deg,#0389ff,rgba(3,137,255,.2))"
          color="#0389ff"
          icon="flutter.svg"
          title="Flutter"
          category="Mobile"
          description="Se o seu objetivo está alinhado com programação mobile e você deseja construir apps compilados de forma
          nativa para celular, web e desktop a partir de um código-base, essa é sua missão."
        />
      </SimpleGrid>
    </Flex>
  );
}
