const bcrypt = require("bcrypt");

const hashedPassword =
  "$2b$10$PRf.2moic/wLf2OywaxY2.KP/ySorMLOkGeJG0Q8/VwaGJwAXG.ay";
const plainTextPassword = "usethreewords";

const checkPassword = async () => {
  const result = await bcrypt.compare(plainTextPassword, hashedPassword);
  console.log(result);
};

checkPassword();