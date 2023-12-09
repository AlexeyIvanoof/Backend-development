//import { createServer } from "http";
//import { getUsers } from "./modules/users";
const http = require('http')
const getUsers = require('./modules/users.js')

/*const url = new URL(request.url, "http://127.0.0.1");
console.log(url);
console.log(url.searchParams);
*/

const port = 3003;
const hostname ="http://127.0.0.1";

const server = http.createServer((request, response) => {
  const url = new URL(request.url, hostname);
  const userName = url.searchParams.get("name");

  if (userName) {
    response.statusCode = 200;
    response.statusMessage = "ok";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Hello ${userName}`);
    response.end();
    return;
  };

 switch (request.url) {
    case "/?users":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "application/json");
      response.write(getUsers());
      response.end();
      break;

case "/?name":
  response.statusCode = 400;
  response.statusMessage = "Bad Request";
  response.setHeader("Content-Type", "text/plain");
  response.write(`Enter a name`);
  response.end();
  break;

case "/":
  response.statusCode = 200;
  response.statusMessage = "OK";
  response.setHeader("Content-Type", "text/plain");
  response.write(`Hello world`);
  response.end();
  break;

default:
  response.statusCode = 500;
  response.statusMessage = "Internal Server Error";
  response.setHeader("Content-Type", "text/plain");
  response.write("wrong");
  response.end();
  break;
}
})

server.listen(hostname, port, () => {
  console.log(`Сервер запущен по адресу htpp://${hostname}:${port}/`);
});