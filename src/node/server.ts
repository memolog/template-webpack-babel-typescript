import express from "express";
import serveStatic from "serve-static";
import path from "path";

import * as hello from "./hello";

const app = express();
const rootPath = path.resolve(__dirname, "../../");

app.get("/hello", (req, res) => {
  res.json({
    greeting: hello.greeting()
  });
});

app.use("/", serveStatic(rootPath + "/public"));

app.listen(3000, () => console.log("Start Node Server listening port 3000"));
