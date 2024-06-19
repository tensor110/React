// Radio Button 
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material'
import {useState} from 'react'

export const MuiRadioButton = () =>{    
    const [value,setvalue]=useState('')
    console.log({value})
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const value= event.target.value
        setvalue(value)
    }
    return(
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label' error>
                    Years of experience
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
                </RadioGroup>
            </FormControl>
            
        </Box>
    )
}