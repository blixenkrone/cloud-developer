
import { config } from './config/config';
import { Sequelize } from 'sequelize';

export const sequelize: any = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': 'postgres',
  'storage': ':memory:',
});
