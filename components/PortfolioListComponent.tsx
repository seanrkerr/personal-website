import Image from "next/image";
export const PortFolioListComponent = (props: any) => {
  const itemList = props.list;

  const items = itemList.map(function (data: any, idx: number) {
    return (
      <div
        key={idx}
        className="flex flex-col bg-white rounded-2xl shadow-xl mt-8"
      >
        <div className="flex-1 relative pt-8 px-6 pb-8 md:px-8">
          <h3 className="text-xl font-medium text-gray-900">{data.name}</h3>
          <p className="mt-4 text-base text-gray-500">{data.story}</p>
        </div>
        <div className="p-6 md:bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8 sm:bg-white-100 sm:mx-auto">
          <Image
            className="mt-2"
            src={`/${data.image}`}
            alt={data.name}
            width={425}
            height={273}
          />

          {data.link === "" ? (
            <>{""}</>
          ) : (
            <a
              href={data.link}
              className="mt-2 text-base block clear-both font-normal text-gray-700 hover:text-indigo-600"
            >
              See it<span aria-hidden="true"> &rarr;</span>
            </a>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      {items.length === 0 ? (
        <h3 className="text-xl font-medium text-gray">
          Unable to load portfolio{" "}
          <span role="img" aria-label="disappointed face">
            😞
          </span>
        </h3>
      ) : (
        <>{items}</>
      )}
    </>
  );
};
