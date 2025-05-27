const Tag = ({ children }) => (
 <span className="inline-flex items-center justify-center
                 border border-gray-300 rounded
                 px-2 py-1
                 text-gray-700 text-xs
                 whitespace-nowrap overflow-hidden truncate
                 max-w-[180px] sm:max-w-[180px] md:max-w-[220px]
                 dark:border-gray-600 dark:text-gray-300">
  {children}
</span>
);

export default Tag;