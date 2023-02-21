import { createIcon } from '@universa11y/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../../styled-components/icon';

const AddIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8 3.33337V12.6667"
        stroke="#8C8C8C"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.33398 8H12.6673"
        stroke="#8C8C8C"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});

AddIcon.displayName = 'AddIcon';

export { AddIcon };
