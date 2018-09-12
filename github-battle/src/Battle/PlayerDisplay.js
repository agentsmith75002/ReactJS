import React, { Component } from 'react';

class PlayerDisplay extends Component {
    render()
    {
        console.log('PlayerDisplay.render', this.props.player)
        return(
            <div>
                <img className='avatar' src={this.props.player.avatar_url} alt='no avatar' />
                <div>@{this.props.player.login}</div>
                <button className='reset' onClick={()=>this.props.onReset()}>reset</button>
            </div>
        )
    }
}

export default PlayerDisplay