import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { useToast, ToastMessageData } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastContainerProps {
  message: ToastMessageData;
  style: Object;
}

const icons = {
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
  info: <FiInfo size={20} />,
};

const Toast: React.FC<ToastContainerProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
