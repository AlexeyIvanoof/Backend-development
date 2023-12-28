// Домашка 4
const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users.js');
const bookRouter = require ('./routes/books.js')
const loggerOne = require('./middlewares/loggerOne.js');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

dotenv.config();

const app = express();

const {
PORT = 3005,
API_URL = "http://127.0.0.1",
MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose.connect(MONGO_URL)
.then (() => {console.log("Connected to Mongo!")
})
.catch((error) => {console.log("<<Mongoo connection error>>", error)
});


const helloWorld = (request, response) => {
    response.status(200);
    response.send("Hello , World!");
}

app.use(cors());
app.use(bodyParser.json());
app.get( '/', helloWorld);

app.post('/', (request, response) => {
    response.status(200);
    response.send("Hello from Post!");
});


app.use(loggerOne);
app.use(userRouter);
app.use(bookRouter);


app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
})