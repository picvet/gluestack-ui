import React from 'react';
import {
  Button,
  ButtonText,
  GluestackUIProvider as Provider,
  Pressable,
  Text,
  Box,
} from '../../../ui-components';
import { config } from '../../../gluestack-ui.config';

const ProviderStory = () => {
  const [colorMode, setColorMode] = React.useState<
    'light' | 'dark' | undefined
  >('dark');
  const toggleColorMode = async () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light');
  };
  return (
    <Provider config={config.theme} colorMode={colorMode}>
      <Box w={100}>
        <Button onPress={toggleColorMode}>
          <ButtonText>Change Mode</ButtonText>
        </Button>
        <Pressable bg="$pink600" mb={'$4'}>
          <Text>Hello</Text>
        </Pressable>
        <Provider
          config={{
            ...config.theme,
            tokens: {
              ...config.theme.tokens,
              colors: { ...config.theme.tokens.colors, pink600: 'red' },
            },
          }}
        >
          <Button bg="$pink600" sx={{ _dark: { bg: '$pink600' } }}>
            <Text>Hello</Text>
          </Button>
        </Provider>
      </Box>
    </Provider>
  );
};

export default ProviderStory;

export { Pressable, Button, Provider, Box };
