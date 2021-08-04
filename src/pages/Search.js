import * as React from "react"; 

import '../styles/custom-classes.css'

import '../styles/styles.css'

var { daos } = require('../data/daos.js'); 

export default function Search({ element }) {
  return (
    <>
      <textbox class='searchbox'/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' class='search'/>
    </>
  );
}
//primarygoal, website, howMember, howFunded, howVote, howToken, techStack, otherInterests
