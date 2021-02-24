// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  const firstDrivers = [drivers[0], drivers[1]];
  return firstDrivers;
}

function returnLastTwoDrivers(drivers) {
  const lastDrivers = [(drivers[drivers.length - 2]), (drivers[drivers.length - 1])];
  return lastDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(num2) {
    return num * num2
  }
}

function fareDoubler(num) {
  const doubledFare = createFareMultiplier(num)(2);
  return doubledFare
}

function fareTripler(num) {
  const doubledFare = createFareMultiplier(num)(3);
  return doubledFare
}

function selectDifferentDrivers(drivers, functionName) {
  return functionName(drivers);
} 