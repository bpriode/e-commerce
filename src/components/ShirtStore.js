import React, {Component} from 'react';
import shirts from '../data/shirts.js'

export default class PosterStore extends Component{
  render(){
    let shirtData = shirts.map((shirt) => {
  return(
    <div key={shirt.id} className="shirtCard">
      <img src={shirt.img} alt=''></img>
      <ul className="list-group">
        <li>Title:{shirt.title}</li>
        <li>Description:{shirt.description}</li>
        <li>Price:{shirt.price}</li>
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
