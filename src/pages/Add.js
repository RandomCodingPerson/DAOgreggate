import * as React from "react"; 

import '../styles/custom-classes.scss'

var { daos } = require('../data/daos.js'); 

export default function Add() {
  return (
    <div className='flexChange'>
              <ul className='blockChange sidebar'>
            <div className='center blockChange'>
              <div className='button'><a href='/'  className='btn'>Home</a></div>&nbsp;
              <div className='button'><a href='/add'  className='btn'>Add</a></div>&nbsp;
              <div className='button'><a href='/learn'  className='btn'>Learn</a></div>
            </div>
          </ul>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegNZX9yLQ_Iuyk21IBfP9M590BtFEvoAlyyek7VEBTYLj0ug/viewform?embedded=true" width="100%" height="1785" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </div>
  );
}
//primarygoal, website, howMember, howFunded, howVote, howToken, techStack, otherInterests