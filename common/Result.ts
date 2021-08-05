export type Success<T> = {
  type: "success";
  data: T;
};

export type Failure<E = Error> = {
  type: "failure";
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;
