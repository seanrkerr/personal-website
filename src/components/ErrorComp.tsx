import React from 'react';

const ErrorComp: React.FC = function () {
  return (
    <h3 className="text-xl font-medium text-white">
      Unable to load portfolio{` `}
      <span role="img" aria-label="disappointed face">
        😞
      </span>
    </h3>
  );
};

export default ErrorComp;
