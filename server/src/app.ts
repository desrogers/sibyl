import express, { Request, Response, NextFunction } from 'express';
import createError = require('http-errors');
import cookieParser = require('cookie-parser');
import logger = require('morgan');

const app = express();
const port = 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

app.get('/api', (req: Request, res: Response) => {
  res.send(`${new Date()}`);
});

app.get('/api/users', (req: Request, res: Response) => {
  res.send(['Aang', 'Katara', 'Momo', 'Sokka', 'Appa']);
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
