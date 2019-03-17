
import express from "./src/express";
import mongoose from "./src/mongoose";
import proxy from "./src/proxy";

import dotenv from "dotenv";

dotenv.config();

Promise.all([
  mongoose(),
  express(),
  proxy(),
]);
