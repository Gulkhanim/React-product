import React, { Component } from 'react'
import { ProductCard } from './ProductCard'

export class Product extends Component {
  render() {
    return (
        <div className='container'>
            <div className='h4'>HƏYƏT EVLƏRİ</div>
      <div className='row'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      </div>
    )
  }
}

