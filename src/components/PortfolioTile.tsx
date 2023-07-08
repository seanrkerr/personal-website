import React from 'react';

type PortfolioTileProps = {
  rowId: string;
  link: string;
  name: string;
  image: string;
  story: string;
};

const PortfolioTile: React.FC<PortfolioTileProps> = function ({
  rowId,
  link,
  name,
  image,
  story,
}) {
  return (
    <>
      <div
        key={rowId}
        className="flex flex-col bg-white rounded-2xl shadow-xl mt-8"
      >
        <div className="flex-1 relative pt-8 px-6 pb-8 md:px-8">
          <h3
            className="text-xl font-medium text-gray-900"
            data-testid="tile-heading"
          >
            {name}
          </h3>
          <p className="mt-4 text-base text-gray-500" data-testid="tile-story">
            {story}
          </p>
        </div>
        <div className="p-6 md:bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8 sm:bg-white-100 sm:mx-auto">
          <img
            data-testid="tile-img"
            className="mt-2"
            src={`/${image}`}
            alt={name}
            width={425}
            height={273}
          />

          {link === `` ? (
            <>{``}</>
          ) : (
            <a
              data-testid="tile-link"
              href={link}
              className="mt-2 text-base block clear-both font-normal text-gray-700 hover:text-indigo-600"
            >
              See it<span aria-hidden="true"> &rarr;</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioTile;
