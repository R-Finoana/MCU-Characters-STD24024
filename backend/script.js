const express = require("express");
const app = express();
const fs = require("node:fs/promises");

app.use(express.json());