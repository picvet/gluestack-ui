import React from 'react';
/* eslint-disable no-console */
import {
  CircleIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '../../../ui-components';

const RadioGroup = ({
  size,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  ...props
}: any) => {
  const [values, setValues] = React.useState('Label 1');

  return (
    <RadioGroup
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      value={values}
      onChange={setValues}
    >
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 1"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
      >
        <RadioIndicator>
          <RadioIcon>
            <CircleIcon />
          </RadioIcon>
        </RadioIndicator>
        <RadioLabel>Label 1</RadioLabel>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 2"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
      >
        <RadioIndicator>
          <RadioIcon>
            <CircleIcon />
          </RadioIcon>
        </RadioIndicator>
        <RadioLabel>Label 2</RadioLabel>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 3"
        accessibilityLabel="Radio"
        onChange={(isSelected: boolean) =>
          console.log(isSelected, 'isSelected')
        }
      >
        <RadioIndicator>
          <RadioIcon>
            <CircleIcon />
          </RadioIcon>
        </RadioIndicator>
        <RadioLabel>Label 3</RadioLabel>
      </Radio>
    </RadioGroup>
  );
};

export default RadioGroup;
