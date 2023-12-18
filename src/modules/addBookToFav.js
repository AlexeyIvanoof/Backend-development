//Домашка 3
const fs = require("fs");
const path = require("path");
const books = require("../data/books.json");

const addBookToFav = (id) => {
  const filePath = path.join(__dirname, "../data/favBooks.json");
  const target = books.find((book) => book.id === id);
  fs.writeFile(filePath, target);
};

module.exports = addBookToFav;