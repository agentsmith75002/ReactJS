import React, { Component } from 'react';
import * as Api from './Api.js';
import Loader from './Loader';
import Grid from './GridRepo';

class Lang extends Component {
  render() 
  {
    return(<h1>{this.props.current}</h1>)
  }
}

class Popular extends Component {
    constructor() {
      super()
      this.state = {
        loading: true,
        repos: {}
      }
    }
  
    // Delegate du callback
    updateItems = (repos) =>
    {
      console.log('updateItems', repos);
      this.setState({
          loading: false,
          repos: repos,
          selectedLanguage: 'All'
        })
    }
  
    componentWillMount()
    {
      console.log('componentWillMount.data');
      Api.AllLanguage(this.updateItems)
    }
  
  render()
  {
    let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Swift'];
    const liste = this.props.items
    console.log('Popular.render', liste)
    return (
          <div>
          {
            (this.state.loading) ? <Loader /> : <div><Lang languages={languages} /><Grid items={this.state.repos}/>  </div>
          }  
          </div>
        )
  }
}

export default Popular