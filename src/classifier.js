const input = [
  {
    name: 'Hendrick',
    dob: '1853-07-18T00:00:00.000Z',
    regNo: '041',
  },
  {
    name: 'Albert',
    dob: '1879-03-14T00:00:00.000Z',
    regNo: '033',
  },
  {
    name: 'Marie',
    dob: '1867-11-07T00:00:00.000Z',
    regNo: '024',
  },
  {
    name: 'Neils',
    dob: '1885-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1858-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1887-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1884-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1901-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis', //
    dob: '1892-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1879-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1871-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1866-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1868-02-14T00:00:00.000Z',
    regNo: '091',
  },
];

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
  console.log(names);
  // for (let person of names) {
  //   if (ageLimit === 0) {
  //     ageLimit = person.age;
  //   }
  //   if (person.age - ageLimit <= 5) {
  //     if (ageGroup.length < 3) {
  //       ageGroup.push(person);
  //     } else {
  //       groupedMembers.push(ageGroup);
  //       ageGroup = [];
  //       ageGroup.push(person);
  //       ageLimit = person.age;
  //     }
  //   } else {
  //     groupedMembers.push(ageGroup);
  //     ageGroup = [];
  //     ageGroup.push(person);
  //     ageLimit = person.age;
  //   }
  // }
  for (let i = 0; i < names.length; i++) {
    let person = names[i];
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
classifier(input);
module.exports = classifier;
