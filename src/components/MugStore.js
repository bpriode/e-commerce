import React, {Component} from 'react';
import mugs from '../data/mugs.js'

export default class MugStore extends Component{
  render(){
    let mugData = mugs.map((mug) => {
  return(
    <div key={mug.id} className="mugCard">
      <img src={mug.img} alt=''></img>
      <ul className="list-group">
        <li>Title:{mug.title}</li>
        <li>Description:{mug.description}</li>
        <li>Price:{mug.price}</li>
      </ul>
    </div>
    )
  })
    return(
      <div>
      {mugData}
      </div>
    )
  }
}
