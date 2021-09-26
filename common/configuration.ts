export type Configuration = {
  api: {
    endpoint: string | undefined;
  };
};

const configuration: Configuration = {
  api: {
    ...(process.env.NODE_ENV === "development"
      ? { endpoint: process.env.LOCAL_ENDPOINT }
      : { endpoint: process.env.ENDPOINT }),
  },
};

export default configuration;
