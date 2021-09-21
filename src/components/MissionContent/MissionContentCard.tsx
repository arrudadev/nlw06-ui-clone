import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';

type MissionContentCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function MissionContentCard({
  icon,
  title,
  description,
}: MissionContentCardProps) {
  return (
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
        <Image src={`/mission-content/${icon}`} w="40px" h="40px" mr="16px" />

        <Heading
          as="h4"
          color="gray.50"
          fontWeight="700"
          fontSize="20px"
          lineHeight="30px"
        >
          {title}
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
          {description}
        </Text>
      </Box>
    </Flex>
  );
}
