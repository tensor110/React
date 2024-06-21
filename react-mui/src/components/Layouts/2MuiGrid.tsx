import { Grid, Box } from '@mui/material'

function MuiGrid() {
  return (
    <>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.light' p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.light' p={2}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.light' p={2}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.light' p={2}>
          Item 4
        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default MuiGrid
