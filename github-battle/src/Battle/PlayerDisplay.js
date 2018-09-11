import React, { Component } from 'react';

class PlayerDisplay extends Component {
    render()
    {
        console.log('PlayerDisplay.render', this.props.player)
        return(
            <div>
                {this.props.player}
            </div>
        )
    }
}

export default PlayerDisplay