import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';


const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])

    // const infoStyle ={
    //     float: 'left',
    // }
    return (
        <div>
            <img src={league.strLogo} alt="" />
            <div className = "league-info">
                <div>
                    <h1> {league.strLeague}</h1>
                    <h3> Founded: {league.intFormedYear}</h3>
                    <h3>Country: {league.strCountry}</h3>
                    <h3>Sports Type: {league.strSport}</h3>
                    <h3>Gender: {league.strGender}</h3>
                </div>
                <div>
                    <img src={league.strFanart2} alt=""/>                   
                </div>
            </div>
            <p>{league.strDescriptionEN}</p>
            <a href={league.strTwitter}>t</a>
            <a href={league.strFacebook}>f</a>            
            <a href={league.strYoutube}>y</a>
            

        </div>


    );
};

export default LeagueDetail;