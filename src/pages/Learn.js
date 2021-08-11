import * as React from "react"; 

import '../styles/custom-classes.scss'

var { daos } = require('../data/daos.js'); 

export default function Learn() {
  return (
    <>
      <div className='flexChange'>
                      <ul className='blockChange sidebar'>
            <div className='center blockChange'>
              <div className='button'><a href='/'  className='btn'>Home</a></div>&nbsp;
              <div className='button'><a href='/add'  className='btn'>Add</a></div>&nbsp;
              <div className='button'><a href='/learn'  className='btn'>Learn</a></div>
            </div>
          </ul>
          <div class='cardRank'>
            <h1>Resources</h1>
            <p>Learn about what DAOs are, how they function, and how to start your own</p>
            <div className='cardRank'>
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://medium.com/bitfwd/how-to-create-run-your-own-dao-5e3eadd96962'>https://medium.com/bitfwd/how-to-create-run-your-own-dao-5e3eadd96962</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://blog.liquid.com/decentralized-autonomous-organization-dao'> https://blog.liquid.com/decentralized-autonomous-organization-dao</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://ethereum.org/en/dao/'> https://ethereum.org/en/dao/</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://decrypt.co/resources/decentralized-autonomous-organization-dao'> https://decrypt.co/resources/decentralized-autonomous-organization-dao</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://www.hbr5.com/what-is-a-dao-decentralized-autonomous-organizations-daos-explained/'> https://www.hbr5.com/what-is-a-dao-decentralized-autonomous-organizations-daos-explained/</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://en.wikipedia.org/wiki/Decentralized_autonomous_organization'> https://en.wikipedia.org/wiki/Decentralized_autonomous_organization</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://www.nesta.org.uk/report/introducing-decentralised-futures/decentralised-autonomous-organisations/'> https://www.nesta.org.uk/report/introducing-decentralised-futures/decentralised-autonomous-organisations/</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://kingsman.ventures/decentralized-autonomous-organization-dao/'> https://kingsman.ventures/decentralized-autonomous-organization-dao/</a>
              </div>&nbsp;
              <div className='cardLi'>
                <a style={{"text-decoration":"none","color":"navy"}} href='https://www.investopedia.com/tech/what-dao/'> https://www.investopedia.com/tech/what-dao/</a>
              </div><br/><br/>
            </div>
          </div>
        </div>
    </>
  );
}
//primarygoal, website, howMember, howFunded, howVote, howToken, techStack, otherInterests