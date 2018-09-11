import React, { Component } from 'react';

class Loader extends Component
{
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount()
  {
    this.interval = setInterval(()=>
    {
      console.log('Loader.interval', this.state.count);
      this.setState({count: this.state.count+1});
    }, 500);
  }

  componentWillUnmount()
  {
    clearInterval(this.interval);
  }

  render() {
    let loading = 'Loading'.padEnd((this.state.count%3)+8, '.')
    console.log('Loader.render', loading)
    return (
      <div> {loading}</div>
    )
  }
}

export default Loader