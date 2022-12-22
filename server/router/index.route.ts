import { Express } from 'express';

module.exports = (app: Express) => {
  app.use('/user', require('./user.route'));
  app.use('/room', require('./room.route'));
};
