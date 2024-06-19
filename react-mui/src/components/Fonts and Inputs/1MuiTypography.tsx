// TypoGraphy 
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 heading</Typography>
      <Typography variant='h2'>h2 heading</Typography>
      <Typography variant='h3' component='h1' gutterBottom>h3 heading</Typography>
      {/* component h1 tag converts h3-> h1 
      gutterbottom gives bottom margin */}
      <Typography variant='h4'>h4 heading</Typography>
      <Typography variant='h5'>h5 heading</Typography>
      <Typography variant='h6'>h6 heading</Typography>

      <Typography variant='subtitle1'>Sub title 1</Typography>
      <Typography variant='subtitle2'>Sub title 2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga neque esse quo aliquid debitis veritatis tempore quam non id vitae molestias cupiditate corrupti beatae doloremque quasi quaerat minima? Porro?
      </Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga neque esse quo aliquid debitis veritatis tempore quam non id vitae molestias cupiditate corrupti beatae doloremque quasi quaerat minima? Porro?
      </Typography>
    </div>
  )
}

