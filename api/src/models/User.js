import pkg from 'mongoose';
const { model, Schema } = pkg;

const userSchema = new Schema({
    username: {type: String, default: null},
    email: {type: String, unique: true},
    password: { type: String },
    token: { type: String },
    type: {
        type: String,
        enum: ['admin', 'student'], 
        required: true
    } 
});

export default model('User', userSchema);