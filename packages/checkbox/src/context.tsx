import React from 'react';
import { ariaAttr } from '@gluestack-ui/utils';

export type ICheckboxContext = Omit<
  ReturnType<typeof useCheckboxProvider>,
  'htmlProps'
>;

export const CheckboxContext = React.createContext({});

export function useCheckboxProvider(props: any) {
  const {
    nativeID: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;

  var idCounter = 0;
  function uniqueId(prefix = '') {
    var id = ++idCounter;
    return prefix + id;
  }

  const id = uniqueId();

  // Generate all the required ids
  const nativeID = idProp || `field-${id}`;

  const labelId = `${nativeID}-label`;
  const feedbackId = `${nativeID}-feedback`;
  const helpTextId = `${nativeID}-helptext`;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false);

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = React.useState(false);

  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    nativeID,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
  };

  return context;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export function useCheckbox(props: any) {
  const field = useCheckboxContext();
  const describedBy: any[] = [];

  // Error message must be described first in all scenarios.
  if (field?.hasFeedbackText) describedBy.push(field?.feedbackId);
  if (field?.hasHelpText) describedBy.push(field?.helpTextId);
  const ariaDescribedBy = describedBy.join(' ');

  const { isInvalid, isDisabled, isReadOnly, isRequired, ...cleanProps } =
    props;
  let nativeID = props?.nativeID;

  if (!nativeID && field?.nativeID) {
    nativeID = `${field?.nativeID}-input`;
  }

  return {
    ...cleanProps,
    nativeID: nativeID,
    disabled: isDisabled || field?.isDisabled,
    readOnly: isReadOnly || field?.isReadOnly,
    required: isRequired || field?.isRequired,
    accessibilityInvalid: ariaAttr(isInvalid || field?.isInvalid),
    accessibilityRequired: ariaAttr(isRequired || field?.isRequired),
    accessibilityReadOnly: ariaAttr(isReadOnly || field?.isReadOnly),
    accessibilityDescribedBy: ariaDescribedBy || undefined,
  };
}

export const useCheckboxContext = () => {
  return React.useContext(CheckboxContext) as unknown as ICheckboxContext;
};
