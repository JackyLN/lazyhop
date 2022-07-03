import { Request, Response } from "express";
import { getCommandFromQueryString, constructGoogleSearchUrl } from "../utils/index";

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

  let command = getCommandFromQueryString(cmd);
  console.log(command);
  switch (command) {
    case "tw":
      res.redirect("https://twitter.com");
      break;
    default:
      res.redirect(constructGoogleSearchUrl(command));
      break;
  }
};
