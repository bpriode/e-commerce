import React, {Component} from 'react';
import mugs from '../data/mugs.js'

export default class MugStore extends Component{
  render(){
    let mugData = mugs.map((mug) => {
  return(
    <div key={mug.id} className="card">
      <img src={mug.img} alt=''></img>
      <ul className="list-group">
        <li className='list-group-item'>Title:{mug.title}</li>
        <li className='list-group-item'>Description:{mug.description}</li>
        <li className='list-group-item'>Price:{mug.price}</li>
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
