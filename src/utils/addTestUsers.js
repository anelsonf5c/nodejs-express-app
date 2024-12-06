const bcrypt = require('bcrypt');
const User = require('../models/User');

async function addTestUsers() {
    try {
        const hashedPassword = await bcrypt.hash('newpassword123', 10); // New password
        const [updated] = await User.update(
            { password: hashedPassword }, // Update the password
            { where: { username: 'admin' } } // Target the admin user
        );
        if (updated) {
            console.log('Test user updated successfully!');
        } else {
            console.log('User not found.');
        }
    } catch (error) {
        console.error('Error updating test user:', error);
    }
}

addTestUsers();
