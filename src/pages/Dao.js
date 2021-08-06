import * as React from "react"; 

import '../styles/custom-classes.scss'
import '../styles/styles.scss'

var { daos } = require('../data/daos.js'); 

export default function Dao({ element }) {
  return (
    <>
      <h1 className='centerText'>{element?.daoName}</h1>
      <p className='centerText'>Primary Goal: {(element?.primaryGoal && element?.primaryGoal != '') ? (element?.primaryGoal) : ("Not Given")}</p>   
      <ul className='flexChange'>
        
        <div className='center onethird'>
          <div>
            <h5 style={{"font-thickness": 700}}>HOW TO JOIN</h5>
            <p>{(element?.howMember && element?.howMember != '') ? (element?.howMember) : ("Not Given")}</p>
          </div>
          <div>
            <h5 style={{"font-thickness": 700}}>HOW IT GETS FUNDED</h5>
            <p>{(element?.howFunded && element?.howFunded != '') ? (element?.howFunded) : ("Not Given")}</p>
          </div>
        </div>
        <div className='center onethird'>
          <div>
            <h5 style={{"font-thickness": 700}}>HOW TO VOTE</h5>
            <p>{(element?.howVote && element?.howVote != '') ? (element?.howVote) : ("Not Given")}</p>
          </div>
          <div>
            <h5 style={{"font-thickness": 700}}>HOW TO GET A TOKEN</h5>
            <p>{(element?.howToken && element?.howToken != '') ? (element?.howToken) : ("Not Given")}</p>
          </div>
        </div>
        <div className='center onethird'>
          <div>
            <h5 style={{"font-thickness": 700}}>TECHNOLOGY STACK</h5>
            <p>{(element?.techStack && element?.techStack != '') ? (element?.techStack) : ("Not Given")}</p>
          </div>
          <div>
            <h5 style={{"font-thickness": 700}}>OTHER</h5>
            <p>{(element?.otherInterests && element?.otherInterests != '') ? (element?.otherInterests) : ("Not Given")}</p>
          </div>
        </div>

      </ul> 
    </>
  );
}
//primarygoal, website, howMember, howFunded, howVote, howToken, techStack, otherInterests
