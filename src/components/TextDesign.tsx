import React from 'react';

interface TextDesignProps {
  children: React.ReactNode;
  variant?: 'achievement' | 'accent';
}

const styles = {
  // what you do: role, skills, stack
  accent: 'text-red-500 dark:text-purple-500',
  // what you earned: graduation, founding the agency 
  achievement: 'text-blue-500 dark:text-purple-500',
};

const TextDesign = ({ children, variant = 'accent' }:TextDesignProps) => {
  return (
    <span className={`font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );  
};

export default TextDesign;