export const errorHandler = (err, req, res) => {
  return res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
};

// Error Handling 404
export const errorHandlerNotFound = (req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
};