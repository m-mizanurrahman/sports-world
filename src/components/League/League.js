import React from 'react';
import { Link } from 'react-router-dom';

const League = (props) => {
    const { strLeague, strSport, idLeague} = props.league;
    const leagueStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '200px',
        width: '250px',
        float: 'left',
        height: '200px',
        textAlign: 'center'
    }
    return (
        <div style={leagueStyle}>
            <h2>{strLeague}</h2>
            <p>Sports type: {strSport}</p>
            <Link to={`/league/${idLeague}`}>
                <button>Explore -></button>
                
                </Link>

            
        </div>
    );
};

export default League;