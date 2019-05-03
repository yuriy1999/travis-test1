require('dotenv').config();
var http = require('http');
var mongoose = require('mongoose');

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const DB_URI = process.env.DB_URI;

const userSchema = new mongoose.Schema({
  email: { type: String, required: true},
  password: { type: String, required: true}
});

let userModel = null;

const initDb = async () => {

  mongoose.Promise = global.Promise;
  mongoose.connection.on('open', () => console.log('Db connected'));
  mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error:'));
  
  await mongoose.connect(DB_URI);

  userModel = mongoose.model('User', userSchema);
  await userModel.create({
    email: 'anton@borrower.com',
    password: '123'
  })
}

initDb();

http.createServer(async function (req, res) {
  const data = await userModel.find();
  console.log('Data: ', data);
  res.write(`Data from db: ${data}`); //write a response to the client
  res.end(); //end the response
}).listen(PORT, HOST, () => {
  console.log('Common app Listening on, ', HOST + ':' + PORT);
}); 
