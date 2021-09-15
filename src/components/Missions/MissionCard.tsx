import { Box, Button, Image, Flex, Heading, Text } from '@chakra-ui/react';

type MissionCardProps = {
  borderTopColor: string;
  color: string;
  icon: string;
  title: string;
  category: string;
  description: string;
};

export function MissionCard({
  borderTopColor,
  color,
  icon,
  title,
  category,
  description,
}: MissionCardProps) {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="flex-start"
      p="74px 15px 32px 24px"
      position="relative"
      border="1px solid #29292e"
      borderRadius="5px"
      bgGradient="linear(180deg, #202024, rgba(32,32,36,0))"
      _before={{
        content: '""',
        width: '100%',
        height: '4px',
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        background: borderTopColor,
      }}
    >
      <Image
        src={`/missions/${icon}`}
        position="absolute"
        top="-46px"
        left="24px"
      />

      <Box>
        <Heading
          fontSize={['30px', '32px']}
          fontWeight="400"
          lineHeight={['35px', '46px']}
          color="gray.50"
        >
          Mission:{' '}
          <Text as="strong" color={color}>
            {title}
          </Text>
        </Heading>

        <Text
          as="span"
          color={color}
          fontSize="20px"
          fontWeight="700"
          lineHeight="23px"
          mt="8px"
        >
          {category}
        </Text>

        <Text
          color="gray.50"
          fontSize="16px"
          fontWeight="400"
          lineHeight="26px"
          mt="24px"
          maxW="304px"
        >
          {description}
        </Text>
      </Box>

      <Button
        color={color}
        border="none"
        background="none"
        fontSize="14px"
        fontWeight="700"
        lineHeight="24px"
        mt="24px"
        textTransform="uppercase"
        _hover={{
          bg: 'transparent',
          textDecoration: 'underline',
        }}
      >
        Saiba mais
      </Button>
    </Flex>
  );
}
