import express from "express";
import cors from "cors";
import Hello from "./Hello";
import Lab5 from "./Lab5/index";
const app = express();
app.use(cors());
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);