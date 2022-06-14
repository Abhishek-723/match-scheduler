import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import '../Styles/TeamDetails.css'
import { toast } from 'react-toastify';

function TeamDetails(props) {
    const setTeam1Venue = (e) => {
        if(e.target.value==='Home'){
            props.setDetails(prev => ({
                ...prev, team1Venue: e.target.value
            }))
            props.setDetails(prev => ({
                ...prev, team2Venue: 'Away'
            }))
        }
        else{
            props.setDetails(prev => ({
                ...prev, team1Venue: e.target.value
            }))
            props.setDetails(prev => ({
                ...prev, team2Venue: 'Home'
            }))
        }
    }
    const setTeam2Venue = (e) => {
        if(e.target.value==='Home'){
            props.setDetails(prev => ({
                ...prev, team2Venue: e.target.value
            }))
            props.setDetails(prev => ({
                ...prev, team1Venue: 'Away'
            }))
        }
        else{
            props.setDetails(prev => ({
                ...prev, team2Venue: e.target.value
            }))
            props.setDetails(prev => ({
                ...prev, team1Venue: 'Home'
            }))
        }
    }
    const handleSubmit = () => {
        if(props.details.team1==='' || props.details.team2==='' || props.details.team1Venue===''){
            toast.warn('Please fill out all the fields')
        }
        else props.handleSubmit();
    }
  return (
    <>
        <div className="team__details">
            <h1>Please setup the team details</h1>
            <div className='team'>
                <TextField id="outlined-basic" label="Team 1 Name" value={props.details.team1} onChange={(e)=>props.setDetails(prev=>({
                    ...prev, team1: e.target.value
                }))}  variant="outlined" />
                <FormControl>

                <InputLabel id="demo-simple-select-helper-label">Match Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.details.team1Venue}
                    label="Match Type"
                    onChange={setTeam1Venue}
                    sx={{ minWidth: 250}}
                    >
                        <MenuItem value={'Home'}>Home</MenuItem>
                        <MenuItem value={'Away'}>Away</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='team'>
                <TextField id="outlined-basic" label="Team 2 Name" value={props.details.team2} onChange={(e)=>props.setDetails(prev=>({
                    ...prev, team2: e.target.value
                }))} variant="outlined" />
                <FormControl>

                <InputLabel id="demo-simple-select-helper-label">Match Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.details.team2Venue}
                    label="Match Type"
                    onChange={setTeam2Venue}
                    sx={{ minWidth: 250}}
                    >
                        <MenuItem value={'Home'}>Home</MenuItem>
                        <MenuItem value={'Away'}>Away</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="buttons">
                <Button variant="outlined" onClick={props.prev}>Back</Button>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    </>
  )
}

export default TeamDetails