import { readFileSync } from "fs";
import { join } from "path";

export const getUsers = () => {
  const filePath = join(__dirname, "../data/users.json");
  return readFileSync(filePath);
};

