const errorMap = {
  INVALID_VALUE: 422,
  BAD_REQUEST: 400,
  ALREADY_EXISTS: 409,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
