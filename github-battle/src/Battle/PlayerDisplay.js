import React from 'react';

const PlayerDisplay = ({player, onReset}) =>
    <div>
        <img className='avatar' src={player.avatar_url} alt='no avatar' />
        <div>@{player.login}</div>
        <button className='reset' onClick={()=>onReset()}>reset</button>
    </div>

export default PlayerDisplay