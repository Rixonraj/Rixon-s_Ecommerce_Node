const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const adminLoginSchema = new Schema({
    googleId: {
        required: false,
        type: String
    },
    twitterId: {
        required: false,
        type: String
    },
    githubId: {
        required: false,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    emailVerified:{
        required: false,
        default: false,
        type: Boolean
    },
    emailToken:{
        required: true,
        type: String
    }
}
// , {
//   timestamps: true,
// }

);

const adminLogin = mongoose.model('adminLogin', adminLoginSchema, 'ecommerce_admin');
module.exports = adminLogin;