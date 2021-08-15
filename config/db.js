const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect(
  process.env.DB_URI,
  {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }
)
.then(() => {
  console.log('Succeed Connect MongoDB')
})
.catch((err) => {
  console.log('Failed connect MongoDB')
})

db.on('error', () => {
  console.log('Error occured from the database')
});
db.on('open', () => {
  console.log('Successful accessed the database')
})

module.exports = mongoose;