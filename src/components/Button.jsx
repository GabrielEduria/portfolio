const Button = ({ children, href, onClick }) => {
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto:");

  const commonClasses = `
    font-semibold cursor-pointer
    rounded-lg inline-flex items-center text-nowrap
    px-4 sm:px-10 py-1.5 text-[12px]  w-fit
    transition transform duration-200 hover:scale-105 z-9
    backdrop-filter backdrop-blur-sm bg-opacity-80 p-1

    text-white bg-[#050708] hover:bg-[#1a1c1c]/90
    focus:ring-[#050708]/50 

    dark:text-black dark:bg-[#fafafa] dark:hover:bg-gray-200 dark:focus:ring-white
  `;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={commonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
};

export default Button;
