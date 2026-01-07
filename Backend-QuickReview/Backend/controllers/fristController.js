const express = require('express');
const app = express();
                        // Creating a controller with two functions: TestingAPI and CheckingAPI
const TestingAPI = (req, res) => {
    console.log("Testing API Called");
}

const CheckingAPI = (req, res) => {
    console.log("Checking API Called");
}

exports.TestingAPI = TestingAPI;
exports.CheckingAPI = CheckingAPI;