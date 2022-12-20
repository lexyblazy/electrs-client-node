import { ApiResponse } from "apisauce";

export const withErrorHandler = async <T>(fn: () => Promise<ApiResponse<T>>) => {
  const response = await fn();

  if (!response.ok) {
    const message = `problem = ${response.problem}, status=${response.status}, data=${response.data}`;

    throw new Error(message);
  }

  return response.data;
};
