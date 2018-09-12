import React, { Component } from 'react';
import PlayerForm from './PlayerForm';
import PlayerDisplay from './PlayerDisplay';
import PlayerScore from './PlayerScore';

class Battle extends Component {
    constructor() {
      super()
      this.state = {
        player1: null,
        player2: null,
        gameStarted: false
      }
    }

    computeScore(player)
    {
        return player.followers + player.following + player.public_repos
    }

    render()
    {
        if(!this.state.gameStarted)
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
                            <button className='button' onClick={()=>this.setState({gameStarted: true})}>Battle</button> :
                            <p></p>
                    }
                    </div>
                </div>
            )
        }
        else
        {
            let score1 = this.computeScore(this.state.player1)
            let score2 = this.computeScore(this.state.player2)
            
            return(
                <div className='row'>
                    <PlayerScore status='Winner' score={score1>score2 ? score1 : score2} player={score1>score2 ? this.state.player1 : this.state.player2} />
                    <PlayerScore status='Looser' score={score1<score2 ? score1 : score2} player={score1<score2 ? this.state.player1 : this.state.player2} />
                </div>
                )
        }
    }
}

export default Battle