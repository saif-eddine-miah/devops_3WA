require('dotenv').config();
const Message = require('./src/message.js');

let message = new Message(process.env.LANGUAGE);

console.log(message.get());
