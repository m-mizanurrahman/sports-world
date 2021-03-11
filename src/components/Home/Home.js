import React from 'react';
import { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])

    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>Sports World</h1>
            {
                leagues.map(league => <League league={league}></League>)
            }
        </div>
    );
};

export default Home;