import React, { Component } from 'react';
import PlayerForm from './PlayerForm';
import PlayerDisplay from './PlayerDisplay';

class Battle extends Component {
    constructor() {
      super()
      this.state = {
        player1: null,
        player2: null
      }
    }

    render()
    {
        return(
            <div>
                <div className='row'>
                {
                    (this.state.player1==null) ?
                        <PlayerForm number='one' onPlayerLoaded={(player)=> this.setState({...this.state, player1: player})} /> :
                        <PlayerDisplay player={this.state.player1} onReset={()=>this.setState({...this.state, player1: null})} />
                }
                {
                    (this.state.player2==null) ?
                        <PlayerForm number='two' onPlayerLoaded={(player)=> this.setState({...this.state, player2: player})} /> :
                        <PlayerDisplay player={this.state.player2} onReset={()=>this.setState({...this.state, player2: null})} />
                }
                </div>
                <div className='row'>
                {
                    (this.state.player1 != null && this.state.player2 != null) ?
                        <button className='button' onClick={()=>console.log('BATTLE !!!!!')}>Battle</button> :
                        <p></p>
                }
                </div>
            </div>
        )
    }
}

export default Battle