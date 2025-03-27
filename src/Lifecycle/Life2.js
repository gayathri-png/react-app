import React, { Component } from 'react'

export default class Life2 extends Component {
  constructor(props){
    super(props);
    this.state = {counts:this.props.count}
  }
  static getDerivedStateFromProps(props,state){
return {counts:props.count}
  }
  shouldComponentUpdate(){
 return true
  }
  getSnapshotBeforeUpdate(props,state){
    console.log(props,state);
    return "react"
  }
  componentDidUpdate(props,state,cr){
    console.log(props,state,cr)
  }
  render() {
    return (
      <div>
        <h1>Life2</h1>
       <p> {this.state.counts}</p>
      </div>
    )
  }
}
