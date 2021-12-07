type HeadingProps = {
  children: JSX.Element;
};

const Heading: React.FC<HeadingProps> = function ({ children }) {
  return (
    <div className="relative max-w-7xl mx-auto pt-28 pb-28 px-4 sm:px-6 lg:px-8 bg-grayer-500">
      {children}
    </div>
  );
};

export default Heading;
