import { Accordion, Typography, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"

function MuiAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExapnded: boolean, panel: string) => {
        setExpanded(isExapnded ? panel : false)
    }
  return (
    <div>
      <Accordion
        expanded = {expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
            id='panel1-header'
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam beatae cupiditate quisquam, odio hic nemo culpa optio? Deleniti repudiandae dolore dicta enim veniam eaque architecto ipsum est pariatur eos esse ab excepturi neque impedit, nisi cumque quisquam. Autem animi totam itaque, ut magni aliquid eaque incidunt doloribus consequuntur, exercitationem nulla!
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      expanded = {expanded === 'panel2'}
      onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
        <AccordionSummary
            id='panel2-header'
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam beatae cupiditate quisquam, odio hic nemo culpa optio? Deleniti repudiandae dolore dicta enim veniam eaque architecto ipsum est pariatur eos esse ab excepturi neque impedit, nisi cumque quisquam. Autem animi totam itaque, ut magni aliquid eaque incidunt doloribus consequuntur, exercitationem nulla!
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      expanded = {expanded === 'panel3'}
      onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
        <AccordionSummary
            id='panel3-header'
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam beatae cupiditate quisquam, odio hic nemo culpa optio? Deleniti repudiandae dolore dicta enim veniam eaque architecto ipsum est pariatur eos esse ab excepturi neque impedit, nisi cumque quisquam. Autem animi totam itaque, ut magni aliquid eaque incidunt doloribus consequuntur, exercitationem nulla!
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
