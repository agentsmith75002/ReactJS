import React, { Component } from 'react';
import * as Api from './Api.js';
import Loader from './Loader';
import Grid from './GridRepo';

const allLanguages = 'All'
const languages = [allLanguages, 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Swift'];

const LangBar = ({languages, activeLanguage, selectLanguage}) =>
    <ul className='languages'>
        {
            /* WARNING : do not use a direct function, use a delegate */
            languages.map((item,idx) => 
                <li key={idx} 
                    style={item===activeLanguage ? {color:'red'} : null} 
                    onClick={()=>selectLanguage(item)}
                >
                    {item}
                </li>)
        }
    </ul>

class Popular extends Component {
    constructor() {
      super()
      this.state = {
        loading: true,
        repos: {},
        selectedLanguage: allLanguages
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
          repos: null,
          selectedLanguage: language
        }, () => this.fetchRepo());
    }

    fetchRepo()
    {
        console.log('fetchRepo', this.state.selectedLanguage)
        if(this.state.selectedLanguage === allLanguages)
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
      
      this.fetchRepo()
    }
  
    render()
    {
        return (
            <div>
               <LangBar languages={languages} activeLanguage={this.state.selectedLanguage} selectLanguage={this.setLanguage} />
                {
                    (this.state.loading) ? 
                        <Loader /> : 
                        <Grid items={this.state.repos}/>
                }  
            </div>
            )
    }
}

export default Popular