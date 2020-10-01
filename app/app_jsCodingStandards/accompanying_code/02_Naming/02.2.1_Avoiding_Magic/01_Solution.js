var password = "Password1";
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 31;
if (password.length > MIN_PASSWORD_LENGTH && password.length < MAX_PASSWORD_LENGTH) {
  console.log("Password is valid");
}