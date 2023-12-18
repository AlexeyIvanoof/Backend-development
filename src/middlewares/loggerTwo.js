// Домашка 4
const { request, response } = require("express");

const loggerTwo = (request, response, next) => {
    console.log('Log 2');
    next();
};

module.exports = loggerTwo;