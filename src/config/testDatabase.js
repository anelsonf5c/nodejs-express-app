const { Sequelize } = require('sequelize'); // Import Sequelize
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables

// Initialize Sequelize instance
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.DB_STORAGE || './data/database.sqlite',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  logging: false, // Disable logging
});

// Debug: Log sequelize instance to the console
console.log('Sequelize instance:', sequelize);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Close the connection
    await sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();
