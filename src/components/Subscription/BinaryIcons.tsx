import { Image } from '@chakra-ui/react';

export function BinaryIcons() {
  return (
    <>
      <Image
        src="/icons/binary01.svg"
        alt="Binary"
        display={['none', 'flex']}
        position="absolute"
        top="95px"
        left="-49px"
      />

      <Image
        src="/icons/binary02.svg"
        alt="Binary"
        display={['none', 'flex']}
        position="absolute"
        top="-109px"
        right="-33px"
      />

      <Image
        src="/icons/binary03.svg"
        alt="Binary"
        display={['none', 'flex']}
        position="absolute"
        bottom="38px"
        right="-16px"
      />
    </>
  );
}
