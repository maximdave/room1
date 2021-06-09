const addMath = require("../model/addMath")
const find = require("../model/find")
const fs = require("fs");
const path = require("path");
const express = require("express");

const database = path.join(__dirname, "../", "db/db.json");
const result = [];

function add(req, res) {
  console.log("i am here");
  const { x, y } = req.body;
  try {
    const newResult = addMath(x, y);
    result.push(newResult);
    fs.writeFileSync(database, JSON.stringify(result), "utf8");
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}



module.exports = add;
