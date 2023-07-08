import React from 'react';

const headings = [
  {
    id: 1,
    path: `/`,
    heading: `Hey, I&#39;m Sean Kerr.`,
    subHeading: `I&#39;m a full stack developer from Sydney, Australia.`,
    subHeading2: `I&#39;ve been building websites for as long as I can remember.`,
  },
  {
    id: 2,
    path: `/portfolio`,
    heading: `Portfolio`,
    subHeading: `Some of my work, design systems, apps and more`,
  },
  {
    id: 3,
    path: `/about`,
    heading: `About`,
    subHeading: ``,
  },
  {
    id: 4,
    path: `/contact`,
    heading: `Contact`,
    subHeading: `Say hi or even hire me`,
  },
];

const Hero: React.FC = function () {
  const router = ``;

  return (
    <div className="relative md:pb-2 sm:pb-2 bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/hero.png"
          alt="Landscape picture"
          width={1920}
          height={600}
        />
        <div
          className="absolute inset-0 bg-gray-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto pt-16 pb-28 px-4 sm:px-6 lg:px-8">
        {headings
          .filter((heading) => heading.path === router.pathname)
          .map((headingType, idx) => (
            <div key={idx}>
              <h1
                dangerouslySetInnerHTML={{ __html: headingType.heading }}
                className="text-4xl tracking-tight text-white md:text-5xl lg:text-6xl lg:ml-2"
              ></h1>
              {headingType.subHeading && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: headingType.subHeading || ``,
                  }}
                  className="mt-6 max-w-3xl text-xl text-gray-300"
                ></p>
              )}

              {headingType.subHeading2 && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: headingType.subHeading2 || ``,
                  }}
                  className="mt-6 max-w-3xl text-xl text-gray-300"
                ></p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;
