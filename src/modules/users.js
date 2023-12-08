import { readFileSync } from "fs";
import { join } from "path";

const getUsers = () => {
  const filePath = join(__dirname, "../data/users.json");
  return readFileSync(filePath);
};

export default getUsers;
