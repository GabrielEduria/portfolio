const Tag = ({ children }) => (
  <span className="inline-flex items-center justify-center 
                  border border-gray-300 rounded 
                  px-2 py-1 text-gray-700 
                  whitespace-nowrap overflow-hidden
                  sm:max-w-[120px] sm:truncate sm:px-1.5 sm:py-0.5
                  text-sm ">
    {children}
  </span>
);

export default Tag;