// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}
//
// while ([condition]) {
//   [loop body]
// }
//
function tailsNeverFails() {
  return Math.random() >= 0.5;
}
 
while (tailsNeverFails()) {
  console.log(//'how many times?');
}
