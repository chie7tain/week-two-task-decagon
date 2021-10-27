

// /**
//  * This is the entry point to the program
//  * Question 1 - Classifier
//  *
//  * @param {any} input Array of student objects
//  */

function classifier(input) {
  names = [...input];
  names = names.map((member) => {
    member.age = new Date().getFullYear() - new Date(member.dob).getFullYear();
    return member;
  });

  names.sort((a, b) => a.age - b.age);

  let groupedMembers = [];
  // names;

  let ageGroup = [];

  let ageLimit = 0;

  for (let person of names) {
    if (ageLimit === 0) {
      ageLimit = person.age;
    }
    if (person.age - ageLimit <= 5) {
      if (ageGroup.length < 3) {
        ageGroup.push(person);
      } else {
        groupedMembers.push(ageGroup);
        ageGroup = [];
        ageGroup.push(person);
        ageLimit = person.age;
      }
    } else {
      groupedMembers.push(ageGroup);
      ageGroup = [];
      ageGroup.push(person);
      ageLimit = person.age;
    }
  }
  console.log(ageGroup);
  console.log(groupedMembers);

  if (ageGroup.length) groupedMembers.push(ageGroup);
  let result = {};

  for (let i = 0; i < groupedMembers.length; i++) {
    let str = 'group' + (i + 1);
    let membersAges = groupedMembers[i].map((el) => el.age);
    membersAges;
    result[str] = {
      members: groupedMembers[i],
      oldest: Math.max(...membersAges),
      sum: membersAges.reduce((prev, curr) => prev + curr),
      regNos: groupedMembers[i]
        .map((el) => parseInt(el.regNo))
        .sort((a, b) => a - b),
    };
  }
  result.noOfGroups = groupedMembers.length;
  return result;
}
module.exports = classifier;
