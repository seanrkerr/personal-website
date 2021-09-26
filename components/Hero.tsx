import Image from "next/image";

const Hero: React.FC = function () {
  return (
    <div className="relative md:pb-2 sm:pb-2 bg-gray-800">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/hero.png"
          alt="Landscape picture"
          layout="responsive"
          width={1920}
          height={600}
        />
        <div
          className="absolute inset-0 bg-gray-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto pt-16 pb-28 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold  tracking-tight text-white md:text-5xl lg:text-6xl">
          Hey, I&#39;m Sean Kerr.
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          I&#39;m a full stack developer from Sydney, Australia.
        </p>
        <p className="mt-2 max-w-3xl text-xl text-gray-300">
          I&#39;ve been building websites for as long as I can remember.
        </p>
      </div>
    </div>
  );
};

export default Hero;
