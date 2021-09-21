import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { ScheduleCard } from './ScheduleCard';

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
          <ScheduleCard
            date="20 de junho"
            hours={[
              { hour: '19h00', description: 'Encontro ao vivo' },
              { hour: '20h00', description: 'Aula prática 01' },
            ]}
          />

          <ScheduleCard
            date="21 de junho"
            hours={[
              { hour: '19h00', description: 'Encontro ao vivo' },
              { hour: '20h00', description: 'Aula prática 02' },
            ]}
          />

          <ScheduleCard
            date="22 de junho"
            hours={[
              { hour: '19h00', description: 'Encontro ao vivo' },
              { hour: '20h00', description: 'Aula prática 03' },
            ]}
          />

          <ScheduleCard
            date="23 de junho"
            hours={[
              { hour: '19h00', description: 'Encontro ao vivo' },
              { hour: '20h00', description: 'Aula prática 04' },
            ]}
          />

          <ScheduleCard
            date="24 de junho"
            hours={[
              { hour: '19h00', description: 'Encontro ao vivo' },
              { hour: '20h00', description: 'Aula prática 05' },
            ]}
          />

          <ScheduleCard
            date="25 de junho"
            hours={[{ hour: '09h00', description: 'O Próximo Nível' }]}
          />

          <ScheduleCard
            date="27 de junho"
            hours={[{ hour: '20h00', description: 'Encontro de encerramento' }]}
          />

          <ScheduleCard
            date="28 de junho"
            hours={[{ hour: '08h00', description: 'Matrículas do Ignite' }]}
            isTheLast
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
