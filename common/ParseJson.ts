import { Result } from "./Result";

export function ParseJson<T>(json: string): Result<T> {
  try {
    return {
      type: "success",
      data: JSON.parse(json) as T,
    };
  } catch (error) {
    return {
      type: "failure",
      error: error as Error,
    };
  }
}
