import React, {Component} from 'react';
import posters from '../data/posters.js'

export default class PosterStore extends Component{
  render(){
    let posterData = posters.map((poster) => {
  return(
    <div key={poster.id} className="card">
      <img src={poster.img} alt=''></img>
      <ul className="list-group">
        <li className='list-group-item'>Title:{poster.title}</li>
        <li className='list-group-item'>Description:{poster.description}</li>
        <li className='list-group-item'>Price:{poster.price}</li>
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
