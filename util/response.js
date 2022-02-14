export const error = (statusCode, message, errors) => {
  const msg = message || "An unexpected error ocurred. We're looking into it.";
  const code = statusCode || 500;

  return {
    statusCode: code,
    message: msg,
    errors,
  };
};
