const mongoose = require('mongoose');

// User model
// email - require it - trim it - set type - set min length of 1
const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlegth: 1
    }
});

module.exports = { User };