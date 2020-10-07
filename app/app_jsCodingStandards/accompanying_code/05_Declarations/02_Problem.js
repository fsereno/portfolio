var THRESHOLD_OF_USERS = 10;
var numberOfUsers = 11;
var isThresholdMet = false;

var THRESHOLD_OF_USERS = 11; // Within the same global scope, there is nothing stopping this from happening.

if (numberOfUsers > THRESHOLD_OF_USERS) {
  isThresholdMet = true;
  numberOfUsers--;
}