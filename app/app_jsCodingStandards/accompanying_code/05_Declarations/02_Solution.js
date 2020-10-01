const THRESHOLD_OF_USERS = 10;
let numberOfUsers = 11;
let isThresholdMet = false;

if (numberOfUsers > THRESHOLD_OF_USERS) {
  isThresholdMet = true;
  numberOfUsers--;
}