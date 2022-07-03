import { Request, Response } from "express";
import {
  constructGoogleSearchUrl,
  constructNormalUrl,
  getCommandFromQueryString,
  getSearchQueryFromQueryString,
} from "../utils/index";

const defaultCommand = [
  { command: "g", redirect: "https://google.com/search?q=" },
  { command: "tw", redirect: "https://twitter.com" },
  { command: "ig", redirect: "https://instagram.com" },
  { command: "fb", redirect: "https://facebook.com" },
  { command: "gh", redirect: "https://github.com" },
];

export const getAll = async (req: Request, res: Response) => {
  const { cmd } = req.query;

  if (!cmd) {
    res.status(404);
    return;
  }
  if (typeof cmd !== "string") {
    res.status(500);
    return;
  }

  const commandList = new Map();
  defaultCommand.map((command) => {
    commandList.set(command.command, command.redirect);
  });
  const command = getCommandFromQueryString(cmd);
  const foundCommand = commandList.get(command);
  if (foundCommand) {
    res.redirect(
      constructNormalUrl(foundCommand) + getSearchQueryFromQueryString(cmd)
    );
    return;
  } else {
    res.redirect(constructGoogleSearchUrl(cmd));
    return;
  }
};
