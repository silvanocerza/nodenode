const github = require("@actions/github");
const path = require("path");
const markup = require("markup-js");
const { promises: fs } = require("fs");

async function doStuff() {
  const payloadFilePath = ".github/config/failure-message-slack-payload.json";
  let payload = await fs.readFile(path.resolve(payloadFilePath), "utf-8");

  const context = { github: github.context };
  const payloadString = payload.replace("$", "");
  payload = markup.up(payloadString, context);
  console.log(payload);
}

doStuff();
