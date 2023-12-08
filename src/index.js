import { createServer } from "http";
import getUsers from "./modules/users";

const url = new URL(request.url, "http://127.0.0.1");
console.log(url);
console.log(url.searchParams);
const port = 3003;
const hostname = "127.0.0.1";

const server = createServer((request, response) => {
  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "ok";
    (response.header = "Content-Type"), "text/plain";
    response.write(getUsers());
    response.end();
    return;
  }

  response.status = 200;
  response.statusMessage = "ok";
  (response.header = "Content-Type"), "text/plain";
  response.write("Hello World");
  response.end();
});

server.listen(hostname, port, () => {
  console.log(`Сервер запущен по адресу htpp://${hostname}:${port}/`);
});
