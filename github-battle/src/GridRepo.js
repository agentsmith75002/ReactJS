import React, { Component } from 'react';


class Grid extends Component {
    render()
    {
      console.log('Grid.render', this.props.items)
      const liste = this.props.items;
      if(liste == null) return(<p>NO !</p>);
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

  export default Grid