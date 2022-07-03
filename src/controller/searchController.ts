import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  const { cmd } = req.query;
  
  switch (cmd) {
    case "tw":
      res.redirect("https://twitter.com");
      break;
    default:
      res.redirect("https://google.com");
      break;
  }
};
