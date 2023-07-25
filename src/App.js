import React, { Component } from 'react'
import {NavBarr} from "./component/NavBarr"
import { Header } from './component/Header'
import { Product } from "./component/Product"
export class App extends Component {
  render() {
    return (
      <div>
        <NavBarr/>
        <Header/>
        <Product/>
      </div>
    )
  }
}

export default App