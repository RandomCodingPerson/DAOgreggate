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
          <div className='cardRank flex'key={index}>
            <div class='cardLi'>
              <a style={{"text-decoration":"none","color":"navy"}} href={slugify(element.daoName)}> {element.daoName}</a>
            </div>
            <div class='logoGroup'>
              <a class='logo'href={element.twitterLink}>
                <img class='logo'src="http://icons.iconarchive.com/icons/ampeross/smooth/512/Twitter-icon.png"/>
              </a>
              <a class='logo'href={element.discordLink}>
                <img class='logo'src="https://i.ibb.co/cv4N5PF/d-icon-1.png"/>
              </a>
            </div>
          </div>
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
        <div className='flexChange'>
          <ul className='blockChange'>
            <div class='center blockChange'>
              <div class='button'><a href='/home'>Home</a></div>&nbsp;
              <div className='button'><a>Add</a></div>&nbsp;
              <div className='button'><a>Learn</a></div>
            </div>
          </ul>
          <ul>
            <div className='searchBoxWrap'><input type='text' placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} className='searchBox'/></div>
            {items}
        </ul>
        </div>
      </div>
    )
  }
}

export default Home;