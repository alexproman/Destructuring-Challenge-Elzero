/*
..Destructuring Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Puthon", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [frnd1, frnd2, frnd3] = myFriends;

const frindData = (fr) => {
  const {
    title: Name,
    age,
    available,
    skills: [, skil],
  } = fr;
  console.log(`The Friend Name : ${Name}`);
  console.log(`Age : ${age}`);
  console.log(available ? `available For Hire` : `Not Available For Hire`);
  console.log(`The Last Skill : ${skil}`);
};

switch (chosen) {
  case 1:
    frindData(frnd1);
    break;
  case 2:
    frindData(frnd2);
    break;
  case 3:
    frindData(frnd3);
}
