const sequelize = require('../config/database');
const User = require('../models/User');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.create({ username: "testuser", password: "testpassword" });
    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
