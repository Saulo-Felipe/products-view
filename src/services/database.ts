// postgres://diiexwhigbnhjq:9ec7c7771cf4ab1fc586a36d62b2d0abcbe0e18fe3d1bea2cae9bd0673b50131@ec2-52-205-61-230.compute-1.amazonaws.com:5432/d3t3cqqdugu9d9/postgres?ssl=true&sslmode=require
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('d3t3cqqdugu9d9', 'diiexwhigbnhjq', '9ec7c7771cf4ab1fc586a36d62b2d0abcbe0e18fe3d1bea2cae9bd0673b50131', {
  host: 'ec2-52-205-61-230.compute-1.amazonaws.com',
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    },
  },
});