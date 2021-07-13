import { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

type BannerProps = {
  children: ReactNode;
};

export function Banner({ children }: BannerProps) {
  return (
    <Flex
      as="section"
      justifyContent="center"
      h={['auto', '100vh']}
      pt={['24px', 'unset']}
      bgImage="/home/hero.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="top"
      overflow="hidden"
    >
      {children}
    </Flex>
  );
}
