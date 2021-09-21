import { Flex, Grid, Image, Text } from '@chakra-ui/react';

type ScheduleCardProps = {
  date: string;
  hours: {
    hour: string;
    description: string;
  }[];
  isTheLast?: boolean;
};

export function ScheduleCard({
  date,
  hours,
  isTheLast = false,
}: ScheduleCardProps) {
  return (
    <Flex
      flexDir="column"
      borderRadius="5px"
      border="1.5px solid #29292e"
      p="24px 24px 32px"
      position="relative"
      bgGradient={
        isTheLast ? 'linear(270deg,#11251c -77.13%,#121214)' : 'unset'
      }
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        mb="24px"
        bg={isTheLast ? '#11251c' : '#29292e'}
        h="28px"
        maxW="111px"
        borderRadius="5px"
      >
        <Text fontSize="16px" fontWeight="700" lineHeight="16px" color="#fff">
          {date}
        </Text>
      </Flex>

      <Grid gap="16px">
        {hours.map((item, index) => (
          <Flex key={index}>
            <Text
              display="inline-block"
              fontSize="18px"
              fontWeight="500"
              lineHeight="18px"
              pr="16px"
              color="#737380"
              borderRight="1px solid #29292e"
            >
              {item.hour}
            </Text>

            <Text
              display="inline-block"
              fontSize="18px"
              fontWeight="700"
              lineHeight="18px"
              maxW="180px"
              pl="16px"
              color={isTheLast ? '#04d361' : '#737380'}
              bgGradient={
                !isTheLast
                  ? 'linear(270deg,#2ada79 .08%,#4763ff 39.15%,#9570e9 100.08%)'
                  : 'unset'
              }
              bgClip={!isTheLast ? 'text' : 'unset'}
            >
              {item.description}
            </Text>
          </Flex>
        ))}
      </Grid>

      {!isTheLast && (
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
      )}
    </Flex>
  );
}
