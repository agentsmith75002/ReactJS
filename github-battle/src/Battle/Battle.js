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

    playerChanged(player)
    {
        console.log('playerChanged', player)
    }

    render()
    {
        return(
            <div className='row'>
                {
                    (this.state.player1==null) ?
                        <PlayerForm number='one' onPlayerLoaded={this.playerChanged} /> :
                        <PlayerDisplay player={this.state.player1} />
                }
                <PlayerForm number='two' />
            </div>
        )
    }
}

export default Battle