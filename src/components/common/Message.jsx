import React from 'react';
import styles from './Message.module.css';

/**
 * Message component for displaying informational boxes with different color variants
 * @param {Object} props
 * @param {string} props.variant - Color variant: 'red', 'blue', 'orange'
 * @param {React.ReactNode} props.children - Content to display
 * @param {string} props.className - Additional CSS classes
 */
const Message = ({ variant = 'blue', children, className = '' }) => {
  const variantClass = styles[variant] || styles.blue;
  
  return (
    <div className={`${styles.message} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

export default Message;

