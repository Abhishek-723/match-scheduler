import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MatchDetails from '../Components/MatchDetails';
import MatchType from '../Components/MatchType';
import TeamDetails from '../Components/TeamDetails';

function Forms() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        type: '', startDateAndTime: '', endDateAndTime: '', country: 'India', city: '', comments: '', tournamentName: '',  team1: '', team2: '', team1Venue: '', team2Venue: ''
    })
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step+1);
    const prevStep = () => setStep(step-1);
    const handleSubmit = () => {
        dispatch({type: 'ADD_MATCH', payload: details});
        navigate("/matches");
    }
  switch(step){
    case 1:
        return (
            <MatchType
                next={nextStep}
                details={details}
                setDetails={setDetails}

            />
        )
    case 2:
        return (
            <MatchDetails
                prev={prevStep}
                next={nextStep}
                details={details}
                setDetails={setDetails}
            />
        )
    case 3: 
        return (
            <TeamDetails
                prev={prevStep}
                handleSubmit={handleSubmit}
                details={details}
                setDetails={setDetails}
            />
        )
    default: 
        return null
  }
}

export default Forms