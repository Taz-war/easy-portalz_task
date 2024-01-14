import { Box, Button, Chip, Collapse, Container, Grid, IconButton, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Structures from "../../Components/Structures/Structures";
import CloseIcon from '@mui/icons-material/Close';
import ShowStructure from "../../Components/ShowStructure/ShowStructure";
const SectionBuilder = () => {
  const [componentsToRender, setComponentsToRender] = useState([]);
  const [openStructures,setOperStructures] = useState(false)

  const addComponent = (item) => {
    setOperStructures(false)
    setComponentsToRender((prev) => [
      ...prev,
      <Structures
        item={item}
      />,
    ]);
  };
  return (
    <Container>
      {componentsToRender.map((component, index) => (
        <Box key={index}>{component}</Box>
      ))}
      <Paper
        sx={{
          p: 2,
          mt: 2,
          border: "dashed",
          borderColor: "#424040",
          borderWidth: "thin",
        }}
      >
        {/* {openStructures && <ShowStructure />} */}
        <Collapse in={openStructures === false}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Paper>
              <IconButton onClick={()=>setOperStructures(!openStructures)}>
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
        </Collapse>
        <Collapse in={openStructures}>
          <Box textAlign={'right'}>
            <IconButton onClick={()=>setOperStructures(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ShowStructure addComponent={addComponent}/>
        </Collapse>
      </Paper>
    </Container>
  );
};

export default SectionBuilder;
