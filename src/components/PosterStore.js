import React, {Component} from 'react';
import posters from '../data/posters.js'

export default class PosterStore extends Component{
  render(){
    let posterData = posters.map((poster) => {
  return(
    <div key={poster.id} className="mugCard">
      <img src={poster.image} alt=''></img>
      <ul className="list-group">
        <li>Title:{poster.title}</li>
        <li>Description:{poster.description}</li>
        <li>Price:{poster.price}</li>
      </ul>
    </div>
    )
  })
    return(
      <div>
      {posterData}
      </div>
    )
  }
}
