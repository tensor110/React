// Checkbox
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'
import {useState} from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () =>{
    const [acceptTnc,setAcceptTnc]=useState(false)
    const [skills,setskills]=useState<string[]>([])
    // console.log({acceptTnc});
    console.log({skills});
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const value= event.target.checked
        setAcceptTnc(value)
    }
    const handleSkillChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const index= skills.indexOf(event.target.value)
        if(index===-1){
            setskills([...skills,event.target.value])
        }
        else{
            setskills(skills.filter((skill)=> skill !== event.target.value))
        }
    }
    return(
        <Box>
            <Box>
                <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnc} onChange={handleChange} size='small' color='secondary' />}/>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={acceptTnc} onChange={handleChange}></Checkbox>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='HTML'
                            control={<Checkbox
                                value='html'
                                checked={skills.includes('html')}
                                onChange={handleSkillChange}
                                />
                            }
                         />
                        <FormControlLabel
                            label='CSS'
                            control={<Checkbox
                                value='css'
                                checked={skills.includes('css')}
                                onChange={handleSkillChange}
                                />
                            }
                         />
                        <FormControlLabel
                            label='JavaScript'
                            control={<Checkbox
                                value='javacript'
                                checked={skills.includes('javacript')}
                                onChange={handleSkillChange}
                                />
                            }
                         />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}