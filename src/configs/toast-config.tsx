import React from 'react';
import {BaseToastProps} from 'react-native-toast-message';
import {ToastError} from '../shared';

export const toastConfig = {
  customError: ({text1}: BaseToastProps) => <ToastError text={text1} />,
};
