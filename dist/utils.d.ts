import { ApiResponse } from "apisauce";
export declare const withErrorHandler: <T>(fn: () => Promise<ApiResponse<T, T>>) => Promise<T | undefined>;
