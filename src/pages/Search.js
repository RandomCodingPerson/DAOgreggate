import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/styles.css';
import { daos } from '../data/daos.js';
import slugify from'../functions/slugify.js';

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
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = daos.filter((element)=>{
      let input = this.state.search.toLowerCase()
      if(this.state.search == null)
          return element
      else if(element.daoName.includes(input) || element.primaryGoal.includes(input) || element.howFunded.includes(input) || element.howVote.includes(input) || element.howToken(input) || element.techStack(input) || element.otherInterests(input)) {
        return element
      }
    }).map((element, index)=>{
      return(
      <div>

        <li>
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
        </li>

      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      <ul>
        {items}
      </ul>
      </div>
    )
  }
}

export default Search;