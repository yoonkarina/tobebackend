export default {
  development: {
    username: 'root',
    password: 'wishbeen12#!',
    database: 'wishbeen',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
    define: { freezeTableName: true },
  },
  staging: {
    dialect: 'mysql',
    logging: false,
  },
  production: {
    dialect: 'mysql',
    logging: false,
  },
};
