const db = require("../db/db.json");
const express = require("express");

function getMath(req, res) {
  console.log("getMath");
  res.status(200).json({message:"successful", data:db });
}

module.exports = getMath;
