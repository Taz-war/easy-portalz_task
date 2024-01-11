import { Box, Button, Container, Grid, IconButton, Paper } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const SectionBuilder = () => {
    const [componentsToRender, setComponentsToRender] = useState([]);
    const addComponent = (Component) => {
        // setOpenData(false)
        setComponentsToRender((prev) => [
          ...prev,
          <Component
            // key={uuidv4()}
            // index={prev.length}
            // setQuestionSet={setQuestionSet}
            // questionSet={questionSet}
          />,
        ]);
      };
  return (
    <Container>
        <Paper sx={{ p: 2, mt: 2,border:'dashed' }}>
          
          {componentsToRender.map((component, index) => (
            <Box key={index}>{component}</Box>
          ))}
          {/* <Box p={2}>
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                mb: 2,
                bgcolor: "#FFF7E5",
                color: "#F3AF46",
                borderColor: "#F3AF46",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#F3AF46",
                },
              }}
              onClick={() => addComponent(MultipleChoice)}
            >
              Multiple Choice
            </Button>
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                mb: 2,
                bgcolor: "#E9EEFB",
                color: "#5971B7",
                borderColor: "#5971B7",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#5971B7",
                },
              }}
              onClick={() => addComponent(ShortQuestion)}
            >
              Short Answer
            </Button>
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                mb: 2,
                bgcolor: "#FFECE6",
                color: "#FF7B64",
                borderColor: "#FF7B64",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#FF7B64",
                },
              }}
              onClick={() => addComponent(TrueFalse)}
            >
              True/False
            </Button>
          </Box> */}
           <Grid container justify="center" spacing={3}>
      <Grid item>
        <Paper>
          <IconButton>
            <AddOutlinedIcon color="secondary" />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <IconButton>
            <EditIcon color="error" />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <IconButton>
            <CheckCircleOutlineIcon color="primary" />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
        </Paper>
    </Container>
  )
}

export default SectionBuilder