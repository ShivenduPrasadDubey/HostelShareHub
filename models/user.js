import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
    match: [/.+@.+\..+/, 'Invalid email address!'] // Basic email validation regex
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    minlength: 1,
    maxlength: 50,
    match: [/^[a-zA-Z0-9_.]+$/, 'Username invalid, it should contain 8-20 alphanumeric letters, periods, or underscores and be unique!'],
    unique: true
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;
