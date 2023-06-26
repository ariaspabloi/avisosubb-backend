const errorHandler = (err: any, _req: any, res: any, _next: any): void => {
  if (err === undefined) {
    res.status(404).json({
      success: false,
      status: 404,
      message: 'Path not found'
    })
    return
  }
  let statusCode = 500
  let message = 'Something went wrong'

  switch (err.code) {
    case 'P2002':
      statusCode = 400
      message = 'Unique constraint failed'
      break
    case 'P2016':
      statusCode = 400
      message = 'Foreign key constraint failed'
      break
    case 'P2025':
      statusCode = 404
      message = 'Record not found'
      break
    case 'P2003':
      statusCode = 400
      message = 'Violation of a foreign key constraint'
      break
    case 'P2005':
      statusCode = 400
      message = 'Null constraint violation'
      break
    case 'P2014':
      statusCode = 400
      message = 'The provided value for the field is too long'
      break
    case 'P2015':
      statusCode = 400
      message = 'The provided value for the field is invalid'
      break
    case 'P2023':
      statusCode = 400
      message = 'A required field was not provided'
      break
    case 'P2026':
      statusCode = 400
      message = 'An invalid `where` filter was provided'
      break
    case 'P2027':
      statusCode = 400
      message = 'An invalid `orderBy` argument was provided'
      break
    case 'P2028':
      statusCode = 400
      message = 'An invalid `cursor` argument was provided'
      break
    case 'P2030':
      statusCode = 400
      message = 'An invalid `take` argument was provided'
      break
    case 'P3000':
      statusCode = 500
      message = 'Internal server error'
      break
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message
  })
}

export default errorHandler
