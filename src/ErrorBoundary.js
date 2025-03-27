import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError:false}
    }
    static getDerivedStateFromError(){
        return {hasError:true}
    }
  render() {
    return this.state.hasError ? this.props.fallback:this.props.children
  }
}
