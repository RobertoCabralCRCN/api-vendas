import 'dotenv/config';
import User from '../../modules/users/entities/User';
import Product from '../../modules/products/entities/Product';

import { DataSource } from 'typeorm';

export const databasePostgres = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [Product, User],
  subscribers: [],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  migrationsRun: false,
});

databasePostgres
  .initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch(error => console.log(error));
