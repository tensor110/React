import { Paper, Box } from "@mui/material"
import "../../App.css"

function MuiPaper() {
  return (
    <Paper sx={{padding: '32px', margin: '50px'}} elevation={4}>
      <Box
        sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '300px',
            width: '600px',
            padding: '16px',
            '&:hover':{
                backgroundColor: 'primary.light'
            }
          }}>
        Hello
      </Box>
    </Paper>
  )
}

export default MuiPaper
