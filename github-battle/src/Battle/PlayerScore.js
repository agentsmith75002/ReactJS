import React from 'react';

const PlayerScore = ({status, score, player}) =>
    <div>
        <div>{status}</div>
        <div>Score: {score}</div>
        <img className='avatar' src={player.avatar_url} alt='no avatar' />
        <div>@{player.login}</div>
        <div>{player.name}</div>
        <div>{player.location}</div>
        <div>Followers: {player.followers}</div>
        <div>Following: {player.following}</div>
        <div>Public Repos: {player.public_repos}</div>
        <div>{player.blog}</div>
    </div>

export default PlayerScore