import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/styles.scss';
import '../styles/custom-classes.scss';
import slugify from'../functions/slugify.js';
const { daos } = require('../data/daos.js');

class Home extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };

  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    
    const items = daos.filter((element)=>{
      let input = (this.state.search) ? (this.state.search.toLowerCase()) : ('');

      if(this.state.search == null)
          return element
      else if(element.daoName.includes(input) || element.primaryGoal.toLowerCase().includes(input) || element.howFunded.toLowerCase().includes(input) || element.howVote.toLowerCase().includes(input) || element.howToken.toLowerCase().includes(input) || element.techStack.toLowerCase().includes(input) || element.otherInterests.toLowerCase().includes(input)) {
        return element
      }
    }).map((element, index)=>{
      return(
      <div>

        <div>
          <ul className='cardRank flexChange'key={index}>
            <div class='cardLi'>
              <a style={{"text-decoration":"none","color":"navy"}} href={slugify(element.daoName)}> {element.daoName}</a>
            </div>
            <div class='logoGroup'>
              {element.twitterLink && <><a class='logo'href={element.twitterLink}>
                <img class='logo'src="http://icons.iconarchive.com/icons/ampeross/smooth/512/Twitter-icon.png"/>
              </a></>}
              {element.discordLink && <><a class='logo'href={element.discordLink}>
                <img class='logo'src="https://i.ibb.co/cv4N5PF/d-icon-1.png"/>
              </a></>}
              {element.website && <><a class='logo'href={element.website}>
                <img class='logo'src="http://cdn.onlinewebfonts.com/svg/img_5714.png"/>
              </a></>}
            </div>
          </ul>
          &nbsp;
        </div>

      </div>
      )
    })

    return (      
      <div>
        <div class='flex'>
        <img class="searchLogo"src="https://cdn.glitch.com/4a667589-721a-4c61-be01-3227d461b465%2FDAOgreggate%20(2).png?v=1628025352588"/>
        </div>
        <div class='rounded'>de-organizational directory</div>
        <div className='flexChange center fit'>
          <ul className='sidebar'>
            <div className='center blockChange'>
              <div className='button'><a href='/'  className='btn'>Home</a></div>&nbsp;
              <div className='button'><a href='/add'  className='btn'>Add</a></div>&nbsp;
              <div className='button'><a href='/learn'  className='btn'>Learn</a></div>
            </div>
          </ul>
          <div class='section2'>
            <div className='searchBoxWrap'><input type='text' placeholder="Search through DAOs" onChange={(e)=>this.searchSpace(e)} className='searchBox'/></div>
            {items}
        </div>
        </div>
      </div>
    )
  }
}

export default Home;