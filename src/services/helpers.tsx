import { isJsonString } from '../util/util-fuctions';

export const throwNonFieldErrors = (err: Error) => {
  if (isJsonString(err.message)) {
    const errorsFromApi = JSON.parse(err.message);
    if ('non_field_errors' in errorsFromApi) {
      throw new Error(errorsFromApi.non_field_errors[0]);
    }
  }
};
