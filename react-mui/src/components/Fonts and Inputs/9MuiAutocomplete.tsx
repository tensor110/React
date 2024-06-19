import {Stack, Autocomplete, TextField} from '@mui/material'
import {useState} from 'react'

type Skill = {
    id: number
    label: string
}
const skills= ['HTML', 'CSS', 'JavaScript', 'React']

const SkillsOptions = skills.map((skill,index)=>({
    id: index+1,
    label: skill,
}))

export const MuiAutocomplete = () => {
    const [value,setValue]= useState<string | null>(null)
    const [skill,setSkill]= useState<Skill | null>(null)
    // console.log(value);
    console.log(skill);

    const handleChange= (event: any,
        newValue: string | null)=>{
        setValue(newValue)
    }

    const handleSkill= (event: any,
        newValues: Skill | null)=>{
        setSkill(newValues)
    }
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete 
        options={skills}  
        renderInput={(params)=> <TextField {...params} label='skills' />}
        value={value}
        onChange={handleChange}
      />
      <Autocomplete 
        options={SkillsOptions}  
        renderInput={(params)=> <TextField {...params} label='skills' />}
        value={skill}
        onChange={handleSkill}
      />
    </Stack>
  )
}