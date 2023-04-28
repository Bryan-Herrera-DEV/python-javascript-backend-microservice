import { ICommonResponse } from './interfaces/IResponses.interfaces';

export const makeResponse = <T>(
  data: T,
  status: number,
  message: string,
): ICommonResponse<T> => {
  return {
    status,
    message,
    data,
  };
};
