// This function concat in string all errors from json
export const handleErrors = (errors: string) => {
  const errorsJson = JSON.parse(errors);
  let errorMessage = '';
  Object.keys(errorsJson).forEach(key => {
    if (typeof errorsJson[key] === 'string') {
      errorMessage += `${errorsJson[key]}\n`;
    }
    if (typeof errorsJson[key] === 'object') {
      errorMessage += `${errorsJson[key][0]}\n`;
    }
  });
  return errorMessage;
};

export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const validateEmail = (email_: string) => {
  return String(email_)
    .toLowerCase()
    .match(
      // eslint-disable-next-line max-len
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
