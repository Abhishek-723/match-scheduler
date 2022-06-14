import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import '../Styles/MatchType.css'
import { toast } from 'react-toastify';

function MatchType(props) {
    console.log(props);
    const handleChange = (e) => {
        props.setDetails(prev=> ({
            ...prev, type: e.target.value
        }))
    }
    const nextPage = () => {
        if(props.details.type===''){
            toast.warn('Please fill out all the fields')
        }
        else props.next();
    }

  return (
    <>
        <div className="match__type">
            <h1>Select the type of match you want schedule</h1>
            <div className='select'>
                <FormControl>

                <InputLabel id="demo-simple-select-helper-label">Match Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.details.type}
                    label="Match Type"
                    onChange={handleChange}
                    sx={{ minWidth: 300}}
                    >
                        <MenuItem value={'Friendly'}>Friendly</MenuItem>
                        <MenuItem value={'Tournament'}>Tournament</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Button variant="contained" onClick={nextPage}>Next</Button>
        </div>
    </>
  )
}

export default MatchType