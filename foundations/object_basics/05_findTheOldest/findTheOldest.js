const missingYear = function (death, birth){
  if (!death) {
    let death = new Date(0).getFullYear();
    return death - birth;
  }
}
const findTheOldest = function (people) {
  return arr.reduce(function (yearOfDeath, currentYear) {
    const oldestAge = missingYear(oldestAge.yearOfBirth, oldestAge.yearOfDeath);
    const currentAge = missingYear(
      currentYear.yearOfBirth,
      currentYear.yearOfDeath
    );
    return oldestAge < currentAge ? yearOfDeath : currentYear
  });
};

// Do not edit below this line
module.exports = findTheOldest;
