import { Box, Button, Chip, Container, Grid, IconButton, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Structures from "../../Components/Structures/Structures";
// import ShowStructure from "../../Components/ShowStructure/ShowStructure";
const SectionBuilder = () => {
  const [componentsToRender, setComponentsToRender] = useState([]);
  const [openStructures,setOperStructures] = useState(false)

  const ShowStructure = () => {
    const [numberOfStructures,setNumberOfStructures] =useState(['12','6,6','4,4,4','3,3,3,3','3,9','9,3','3,3,6','6,3,3','3,6,3','2,8,2','2,2,2,2,2,2'])
  return (
    <Container>
        <Grid container columns={12} spacing={3} mb={1}>
        {numberOfStructures.map((item,index)=>{
           return (
            <Grid item md={2}>
            {/* <Paper sx={{border:'1px solid black',borderWidth:'thin'}} onClick={()=>addComponent(item)}>{item}</Paper> */}
            <Chip label={`Structure ${item}`} variant="outlined" onClick={()=>addComponent(item)}/>
           </Grid>
           )
        })}
        </Grid>
    </Container>
  )
}

  const addComponent = (item) => {
    console.log(item)
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
        {openStructures && <ShowStructure />}
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
      </Paper>
    </Container>
  );
};

export default SectionBuilder;
