import React, { Component } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

const Lang = ({current}) => <h1>{current}</h1>
/*class Lang extends Component {
  render() 
  {
    return(<h1>{this.props.current}</h1>)
  }
}*/

class Grid extends Component {
  render()
  {
    console.log('Grid.render', this.props.items)
    const liste = this.props.items;
    return(<div>
      Found {this.props.items.length} elements <br />
      <ul className='popular-list'>
        {
          liste.map((item, idx) => 
          <li className='popular-item' key={item.id}>
            <Repo key={item.id} index={idx} src={item}/>
          </li>)
        }
      </ul>
    </div>)
  }
}

class Repo extends Component {
  render()
  {
    console.log('Repo.render', this.props)
    return(
        <ul>
          <li className='popular-rank'>#{this.props.index}</li>
          <li><img className='avatar' src={this.props.src.owner.avatar_url} /></li>
          <li>{this.props.src.name}</li>
          <li>@{this.props.src.owner.login}</li>
          <li>{this.props.src.stargazers_count} stars</li>
        </ul>)
  }
}

class Popular extends Component {
  render()
  {
    const liste = this.props.items
    console.log('Popular.render', liste)
    return (
          <div>
            <Lang current='All' />
            <Grid items={liste}/>      
          </div>
        )
  }
}

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

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      repos: {}
    }
  }
  componentWillMount()
  {
    console.log('componentWillMount.data');
    Axios.get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories')
    .then((response) => {
      console.log('Axios.response.data');
      console.log(response.data);
      this.setState({
        loading: false,
        repos: response.data.items
      })
    })
    .catch(function(error)
    {
      console.log('componentWillMount', error);
    });
  }

  render() {
    console.clear();
    console.log('App', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          (this.state.loading) ? <Loader /> : <Popular items={this.state.repos} />
        }
        
      </div>
    );
  }
}

export default App;
