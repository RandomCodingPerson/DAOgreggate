import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/styles.scss';
import '../styles/custom-classes.scss';
import slugify from'../functions/slugify.js';
const { daos } = require('../data/daos.js');

class Search extends Component {

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
      <input type='text' placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} className='searchBox'/>
      <ul>
        {items}
      </ul>
      </div>
    )
  }
}

export default Search;