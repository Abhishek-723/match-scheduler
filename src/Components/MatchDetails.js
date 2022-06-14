import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import '../Styles/MatchDetails.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import country from '../utils/countries.json'
import cities from '../utils/cities.json'
import { toast } from 'react-toastify';

function MatchDetails(props) {
    // const [value, setValue] = React.useState(new Date());
    const nextPage = () => {
        if(props.details.startDateAndTime==='' || props.details.startDateAndTime==='' || props.details.comments==='' || (props.details.type==='Tournament' && props.details.tournamentName==='') || props.details.country==='' || props.details.city===''){
            toast.warn('Please fill out all the fields')
        }
        else props.next();
    }
  return (
    <>
    <div className='match__details'>
        <h1>Please setup the match details</h1>
        <div className="scheduler">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Start Time"
                    value={props.details.startDateAndTime}
                    onChange={(newValue) => {
                        let n = newValue.toString();
                        // setValue(newValue);
                        props.setDetails(prev => ({
                            ...prev, startDateAndTime: n
                        }))
                    }}
                />
                <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="End Time"
                    value={props.details.endDateAndTime}
                    onChange={(newValue) => {
                        // setValue(newValue);
                        let n = newValue.toString();
                        props.setDetails(prev => ({
                            ...prev, endDateAndTime: n
                        }))
                    }}
                />
            </LocalizationProvider>
        </div>
        <div className="location">
        <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Choose Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={props.details.country}
                        label="Choose Country"
                        onChange={(e)=> props.setDetails(prev => ({
                            ...prev, country: e.target.value
                        }))}
                        sx={{ minWidth: 250}}
                    >
                        {
                            country.countries.map(data=> (
                                <MenuItem value={data.name} key={data.name}>{data.name}</MenuItem>
                            ))
                        }
                    </Select>
                    
            </FormControl>
            <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Choose City</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={props.details.city}
                        label="Choose City"
                        onChange={(e)=> {
                            console.log(e.target.value);
                            props.setDetails(prev => ({
                                ...prev, city: e.target.value
                            }))
                        }}
                        sx={{ minWidth: 250}}
                    >
                        {
                            cities[props.details.country].map(data=> (
                                <MenuItem value={data.city} key={data.city}>{data.city}</MenuItem>
                            ))
                        }
                    </Select>
            </FormControl>
        </div>
        <div className="tournament__name">
            {
                props.details.type === 'Tournament' ? (
                    <TextField id="outlined-basic" label="Tournament Name" value={props.details.tournamentName} onChange={(e)=>props.setDetails(prev => ({
                        ...prev, tournamentName: e.target.value
                    }))} variant="outlined" />

                ) : null
            }
        </div>
        <div className="comments">
            <TextField id="outlined-multiline-static" multiline label="Add Comments for the tournament..." rows={5} variant="outlined" value={props.details.comments} onChange={(e)=>props.setDetails(prev => ({
                        ...prev, comments: e.target.value
            }))}/>
        </div>
        <div className="buttons">
            <Button variant="outlined" onClick={props.prev}>Back</Button>
            <Button variant="contained" onClick={nextPage}>Next</Button>
        </div>
    </div>  
    </>
  )
}

export default MatchDetails