import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import { MissionContentCard } from './MissionContentCard';

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
          <MissionContentCard
            icon="cellphone.svg"
            title="Uma aplicação completa"
            description="Durante o evento, vamos desenvolver uma aplicação completa em cada trilha, para você entender como grandes empresas estão utilizando as ferramentas no dia-a-dia, além de expandir o seu portfólio e conhecer novas tecnologias na prática."
          />

          <MissionContentCard
            icon="code.svg"
            title="Conteúdo Prático"
            description="O conteúdo do NLW será prático, para você levar suas habilidades para o próximo nível e ter todas as condições necessárias para acessar ótimas oportunidades no mercado, encarar os desafios do mundo real e construir aplicações de ponta."
          />

          <MissionContentCard
            icon="networking.svg"
            title="Networking 100% digital"
            description="Você terá acesso a uma comunidade extremamente engajada que conta com cabeças super inteligentes, onde poderá tirar suas dúvidas, se conectar e interagir com outros devs e acessar ótimas oportunidades."
          />

          <MissionContentCard
            icon="challenges.svg"
            title="Desafios e prêmios"
            description="Você será desafiado durante o NLW, para assimilar e internalizar profundamente cada conceito. E o melhor: poderá ganhar brindes exclusivos da Rocketseat, além de bolsas de estudo para o nosso programa de aceleração profissional."
          />

          <MissionContentCard
            icon="bags.svg"
            title="Programa de bolsas"
            description="Ao embarcar no NLW e participar do evento, você poderá concorrer a uma bolsa na próxima turma do Ignite, o nosso programa de aceleração profissional. Serão 100 vagas para aqueles que se destacarem durante o evento."
          />
        </Grid>
      </Flex>
    </Flex>
  );
}
