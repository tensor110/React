import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import '../../App.css'

function MuiCard() {
  return (
    <Box width='300px'>
      <Card elevation={5}>
        <CardMedia component='img' height='140' image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <CardContent>
            <Typography gutterBottom variant="h5" component='div'>React</Typography>
            <Typography variant="body2" color='text.secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nesciunt quibusdam molestias placeat officiis doloribus vel reprehenderit accusamus quae repudiandae nulla id, vero mollitia sed?</Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
