const data = require('../data/daos.js')
export default function (input) {
  return data.filter((element) => ( element.daoName.includes(input)) || element.primaryGoal.includes(input) || element.howFunded.includes(input) || element.howVote.includes(input) || element.howToken(input) || element.techStack(input) || element.otherInterests(input))
}
//daoName, primaryGoal, howMember, howFunded, howVote, howToken, techStack, otherInterests