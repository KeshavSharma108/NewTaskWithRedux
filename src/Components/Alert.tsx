import React from 'react';
import { Alert as RNAlert } from 'react-native';

type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
  title: string;
  message: string;
  type: AlertType;
}

const Alert = {
  show: ({ title, message, type }: AlertProps) => {
    let prefix = '';
    switch (type) {
      case 'success':
        prefix = '✅ ';
        break;
      case 'error':
        prefix = '❌ ';
        break;
      case 'info':
        prefix = 'ℹ️ ';
        break;
      case 'warning':
        prefix = '⚠️ ';
        break;
    }

    RNAlert.alert(`${prefix}${title}`, message);
  },
};

export default Alert;
