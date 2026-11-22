import React from 'react';

type Variant = 'role' | 'skill' | 'achievement';

interface TextDesignProps {
  children: React.ReactNode;
  variant?: Variant;
}

// Color legend used across the portfolio:
//   red    → role / experience: what you do and who you do it for
//   purple → skills / stack: the tools and tech you use
//   blue   → achievements: degrees, milestones, things you founded or shipped
const styles: Record<Variant, string> = {
  role: 'text-red-500 dark:text-red-400',
  skill: 'text-purple-600 dark:text-purple-400',
  achievement: 'text-blue-600 dark:text-blue-400',
};

const TextDesign = ({ children, variant = 'role' }: TextDesignProps) => {
  return (
    <span className={`font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default TextDesign;
