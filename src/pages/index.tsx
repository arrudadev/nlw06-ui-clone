import { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';

import { Scholarship } from '../components/Scholarship';
import { Subscription } from '../components/Subscription';

export default function Home() {
  const [isMinWidthLargerThan375, setIsMinWidthLargerThan375] = useState(false);
  const [isLargerThan375] = useMediaQuery('(min-width: 375px)');

  useEffect(() => {
    if (isLargerThan375 !== isMinWidthLargerThan375) {
      setIsMinWidthLargerThan375(isLargerThan375);
    }
  }, [isLargerThan375]);

  return (
    <main>
      <Subscription />

      <Scholarship />

      <Flex
        as="section"
        justifyContent="center"
        position="relative"
        padding={['80px 0', '160px 0 140px']}
      >
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="center"
          w="1120px"
          m={['0 24px', '0 24px', '0 24px', 'unset']}
        >
          <Heading
            as="h3"
            fontSize={['30px', '48px']}
            fontWeight="700"
            lineHeight={['35px', '54px']}
            color="gray.50"
            textAlign={['center', 'center', 'unset']}
            mb={['40px', '40px', '40px', 'unset']}
            maxW={['unset', '357px']}
          >
            Evolua na tecnologia que faz mais sentido para você
          </Heading>

          <Grid
            templateColumns={
              isMinWidthLargerThan375 ? 'unset' : 'repeat(3, 1fr)'
            }
            templateAreas={
              isMinWidthLargerThan375 ? `'one' 'two' 'three'` : 'none'
            }
            gap={isMinWidthLargerThan375 ? 'unset' : '12px'}
          >
            <Box
              display={isMinWidthLargerThan375 ? 'flex' : 'grid'}
              alignItems="center"
              justifyContent="center"
              gridArea={isMinWidthLargerThan375 ? 'one' : 'unset'}
            >
              <Stack
                direction={isMinWidthLargerThan375 ? 'row' : 'column'}
                spacing="12px"
              >
                <Image
                  src="/technologies/react.svg"
                  alt="React"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/nodejs.svg"
                  alt="NodeJs"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/elixir.svg"
                  alt="Elixir"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/javascript.svg"
                  alt="Javascript"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/css.svg"
                  alt="CSS"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />
              </Stack>
            </Box>
            <Box
              display={isMinWidthLargerThan375 ? 'flex' : 'grid'}
              alignItems="center"
              justifyContent="center"
              gridArea={isMinWidthLargerThan375 ? 'two' : 'unset'}
            >
              <Stack
                direction={isMinWidthLargerThan375 ? 'row' : 'column'}
                spacing="12px"
              >
                <Image
                  src="/technologies/nextjs.svg"
                  alt="NextJs"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/expo.svg"
                  alt="Expo"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/html.svg"
                  alt="HTML"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/typescript.svg"
                  alt="Typescript"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />
              </Stack>
            </Box>
            <Box
              display={isMinWidthLargerThan375 ? 'flex' : 'grid'}
              alignItems="center"
              justifyContent="center"
              gridArea={isMinWidthLargerThan375 ? 'three' : 'unset'}
            >
              <Stack
                direction={isMinWidthLargerThan375 ? 'row' : 'column'}
                spacing="12px"
              >
                <Image
                  src="/technologies/phoenix.svg"
                  alt="Phoenix"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/flutter.svg"
                  alt="Flutter"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/express.svg"
                  alt="Express"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/dart.svg"
                  alt="Dart"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />

                <Image
                  src="/technologies/others.svg"
                  alt="Outras"
                  w={['56px', '72px', 'unset']}
                  h={['63px', '80px', 'unset']}
                />
              </Stack>
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </main>
  );
}
