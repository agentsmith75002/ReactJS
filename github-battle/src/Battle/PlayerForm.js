import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Api from '../Common/Api.js';

class PlayerForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    handleSubmit = (event) => {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
        Api.GetLogin((player)=>this.props.onPlayerLoaded(player), this.state.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label className='header'>{`Player ${this.props.number}`}</label>
            <br />
            <input type="text" value={this.state.value} onChange={(event) => this.setState({value: event.target.value})} />
            <button disabled={this.state.value===''} className='button' type="submit">Submit</button>
        </form>
      );
    }
  }
    
// PlayerForm.propTypes = {
//     onPlayerLoaded: PropTypes.func.isRequired
//     };

  export default PlayerForm