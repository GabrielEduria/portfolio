const Button = ({ text, href, onClick }) => {
  const isExternal = href?.startsWith("http") 
  || href?.startsWith("mailto:");

  const buttonContent = (
        <button type="button" className="text-white font-semibold cursor-pointer
          bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 
          focus:outline-none focus:ring-[#050708]/50  
          rounded-lg items-baseline text-center inline-flex overflow-hidden text-nowrap 
          text-xs md:text-md px-2 py-2">
        {text}
        </button>
  );


  return href ? (
    <a
      href={href}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default Button;