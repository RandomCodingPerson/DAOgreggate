const data = require('../data/daos.js')
export default function (input) {
  input = input.toLowerCase();
  return data.filter((element) => ( element.daoName.toLowerCase().includes(input)) || element.primaryGoal.toLowerCase().includes(input) || element.howFunded.toLowerCase().includes(input) || element.howVote.toLowerCase().includes(input) || element.howToken.toLowerCase().includes(input) || element.techStack.toLowerCase().includes(input) || element.otherInterests.toLowerCase().includes(input))
}
//daoName, primaryGoal, howMember, howFunded, howVote, howToken, techStack, otherInterests