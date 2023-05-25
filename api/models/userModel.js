const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  photo: String,
  firstName: {
    type: String,
    required: [true, 'please enter a firstname'],
    minLength: [3, 'field must have more than 3 chars'],
  },

  lastName: {
    type: String,
    required: [true, 'User must have a first name'],
    minLength: [3, 'field must have more than 3 chars'],
  },

  email: {
    type: String,
    required: [true, 'please enter your email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'please enter your password'],
    minLength: 8,
    select: false,
  },
  token: {
    type: String,
  },

  confirmPassword: {
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      //this only works on Save
      validator: function (el) {
        return el === this.password;
      },
      message: 'please enter the same password',
    },
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

//hash password before saving into database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  this.confirmPassword = undefined;

  next();
});

//method to compare hashed and normal password

userSchema.methods.correctPassword = async function (candidate, password) {
  return await bcrypt.compare(candidate, password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
