import React, { Component } from 'react'
import Life2 from './Life2';
export default class Life1 extends Component {
    constructor(){
        super();
        this.state = {count:0};
        this.inc = this.inc.bind(this)
        console.log("constructor")
    }
    componentDidMount(){
        console.log("mounting")
    }
    inc(){
        this.setState({count:this.state.count+1})
    }
    componentDidUpdate(){
        console.log("updating")
    }
  render() {
    console.log("creating")
    return (
      <div>
        <h1>Life1</h1>
        <p>{this.state.count}</p>
        <button onClick={this.inc}>+</button>
       <Life2 count={this.state.count}/>
      </div>
    )
  }
}
