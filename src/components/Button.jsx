const Button = ({ children, href, onClick }) => {
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto:");

  const commonClasses = `
    text-white font-semibold cursor-pointer
    bg-[#050708] hover:bg-[#050708]/90 
    focus:ring-[#050708]/50 rounded-lg
    inline-flex items-center text-nowrap
    text-[10px] sm:text-sm px-2.5 py-1.5 sm:px-4 
    overflow-hidden w-fit
    transition transform duration-200 hover:scale-105 `;

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
