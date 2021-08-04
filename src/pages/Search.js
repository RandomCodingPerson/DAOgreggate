import * as React from "react"; 

import '../styles/custom-classes.css'

import '../styles/styles.css'

var { daos } = require('../data/daos.js'); 

export default function Search({ element }) {
  return (
    <>
      <textbox class='searchbox'/>
    </>
  );
}
//primarygoal, website, howMember, howFunded, howVote, howToken, techStack, otherInterests
