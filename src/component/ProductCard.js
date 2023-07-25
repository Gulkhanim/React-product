import React, { Component } from 'react'

const imageUrl ="https://qadin.net/uploads/posts/2015-08/1440506270_11258216_974356705930171_8138061304934000497_n.jpg"
export class ProductCard extends Component {
  render() {
    return (
      <div className='col'>
        <div className="card" style={{width: "18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button >SEÇ </button>
      </div>
    </div>
    </div>
    )
  }
}

