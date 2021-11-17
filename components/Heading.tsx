type HeadingProps = {
  children: JSX.Element;
};

const Heading: React.FC<HeadingProps> = function ({ children }) {
  return (
    <div className="relative max-w-7xl mx-auto pt-16 pb-4 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Heading;
