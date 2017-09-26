import React, {Component} from 'react';
import shirts from '../data/shirts.js'

export default class PosterStore extends Component{
  render(){
    let shirtData = shirts.map((shirt) => {
  return(
    <div key={shirt.id} className="card">
      <img src={shirt.img} alt=''></img>
      <ul className="list-group">
        <li className='list-group-item'>Title:{shirt.title}</li>
        <li className='list-group-item'>Description:{shirt.description}</li>
        <li className='list-group-item'>Price:{shirt.price}</li>
      </ul>
    </div>
    )
  })
    return(
      <div>
      {shirtData}
      </div>
    )
  }
}
