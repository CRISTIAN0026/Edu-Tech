import pkg from 'mongoose';
const { model, Schema } = pkg;

const messageSchema = new Schema({
    text: String,
    date: String,
    createdBy: String,
    typeUser: String,
    emailBy: String
});

export default model('Message', messageSchema);