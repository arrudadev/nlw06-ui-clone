import { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <Flex
      justifyContent="space-between"
      m={['unset', '0 24px']}
      w={['100%', '1120px']}
    >
      {children}
    </Flex>
  );
}
