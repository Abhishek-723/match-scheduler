import React from 'react'
import {useSelector} from 'react-redux'
import '../Styles/Matches.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Matches() {
    const navigate = useNavigate();
    const matches = useSelector(state => state);
    console.log(matches);
  return (
    <div className="matches">
        <div className="header__bar">
            <p>Team1</p>
            <p>Team2</p>
            <p>Match Type</p>
            <p>Tournament Name</p>
            <p>Start Date and Time</p>
            <p>End Date and Time</p>
            <p>Location</p>
            <p>Comments</p>
        </div>
        <div>
            {
                matches.map(data=>(  
                    <div className="scheduled__matches">
                        <p>{data.team1}</p>
                        <p>{data.team2}</p>
                        <p>{data.type}</p>
                        <p>{data.tournamentName === '' ? '-' : data.tournamentName}</p>
                        <p>{data.startDateAndTime}</p>
                        <p>{data.endDateAndTime}</p>
                        <p>{data.city}, {data.country}</p>
                        <p>{data.comments}</p> 
                    </div>
                ))
            }
        </div>
        <div className="buttons">

            <Button variant='contained' onClick={()=> navigate('/')}>Schedule New Match</Button>
        </div>
    </div>
  )
}

export default Matches