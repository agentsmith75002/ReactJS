import React, { Component } from 'react';
import * as Api from './Api.js';
import Loader from './Loader';
import Grid from './GridRepo';

const LangBar = ({languages, selectLanguage}) =>
    <ul className='languages'>
        {
            /* WARNING : do not use a direct function, use a delegate */
            languages.map(item => <li onClick={()=>selectLanguage(item)}>{item}</li>)
        }
    </ul>

// class Lang extends Component {
//   render() 
//   {
//     return(<h1>{this.props.current}</h1>)
//   }
// }

class Popular extends Component {
    constructor() {
      super()
      this.state = {
        loading: true,
        repos: {},
        selectedLanguage: 'All'
      }
    }
  
    // Delegate du callback
    updateItems = (repos) =>
    {
      console.log('updateItems', repos);
      this.setState({
          loading: false,
          repos: repos
        })
    }

    setLanguage = (language) =>
    {
        console.log('setLanguage', language)
        this.setState({
          loading: true,
          repos: {},
          selectedLanguage: language
        })
        this.refresh();
    }

    refresh()
    {
        console.log('refresh', this.state.selectedLanguage)
        if(this.state.selectedLanguage == 'All')
        {
            Api.AllLanguage(this.updateItems)
        }
        else
        {
            Api.SingleLanguage(this.updateItems, this.state.selectedLanguage)
        }
    }
  
    componentWillMount()
    {
      console.log('componentWillMount.data');
      //Api.AllLanguage(this.updateItems)
      this.refresh()
    }
  
    render()
    {
        let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Swift'];
        const liste = this.props.items
        console.log('Popular.render', liste)
        return (
            <div>
            {
                (this.state.loading) ? 
                    <Loader /> :
                    <div>
                        <LangBar languages={languages} selectLanguage={this.setLanguage} />
                        <Grid items={this.state.repos}/>  
                    </div>
            }  
            </div>
            )
    }
}

export default Popular