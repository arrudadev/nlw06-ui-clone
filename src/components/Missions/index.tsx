import { Flex, Heading, Text } from '@chakra-ui/react';

export function Missions() {
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
    </Flex>
  );
}
