// TextField
import { Stack, TextField, InputAdornment } from '@mui/material'
import {useState} from 'react'

export const MuiTextField = () => {
    const [value,setvalue]= useState('')
  return (
    <Stack spacing={4}>
        <Stack spacing={4} direction='row'>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack spacing={4} direction='row'>
            <TextField label='Small Secondary' size='small' color='secondary'/>
        </Stack>

        <Stack spacing={4} direction='row'>
            <TextField label='Form Input' required value={value} onChange={(e)=>setvalue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share this anyone'}/>
            <TextField label='Password' type='password' helperText='Do not share this anyone'/>
            <TextField label='Read Only' InputProps={{readOnly: true}} disabled/>
        </Stack>

        <Stack spacing={4} direction='row'>
            <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField label='Weight' InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}/>
        </Stack>
    </Stack>
  )
}

