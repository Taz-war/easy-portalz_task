import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const ShowStructure = () => {
    const [numberOfStructures,setNumberOfStructures] =useState(['1','2','3','4'])
  return (
    <Container>
        <Grid container columns={12} spacing={3} m={2}>
        {numberOfStructures.map((item,index)=>{
           return (
            <Grid item md={2}>
            <Paper sx={{border:'1px solid black',borderWidth:'thin'}}>{item}</Paper>
           </Grid>
           )
        })}
        </Grid>
    </Container>
  )
}

export default ShowStructure