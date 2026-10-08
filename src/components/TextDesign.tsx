import React from 'react';

interface TextDesignprops {
  children: React.ReactNode; 
}

const TextDesign = ({ children }: TextDesignprops) => {
  return (
    <span className="text-blue-500 font-semibold dark:text-purple-500">
      {children}
    </span>
  );
};

export default TextDesign;