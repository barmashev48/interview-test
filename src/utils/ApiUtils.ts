import { isProdEnvinment } from "./EnvUtils.ts";

export const getBaseUrl = (): string => {
  if (isProdEnvinment()) {
    return "http://localhost:5001";
  } else {
    throw Error("Invalid Environment");
  }
};

export const makeRequest = async (
  url: string,
  options?: RequestInit,
): Promise<any> => {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`API request to URL ${url} failed`);
  }
  return data;
};
