import { Chip, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const ShowStructure = ({addComponent}) => {
  const [numberOfStructures,setNumberOfStructures] =useState(['12','6,6','4,4,4','3,3,3,3','3,9','9,3','3,3,6','6,3,3','3,6,3','2,8,2','2,2,2,2,2,2'])
  return (
  
        <Grid container columns={12} spacing={3} mb={1}>
        {numberOfStructures.map((item,index)=>{
           return (
            <Grid item md={2}>
            <Chip label={`Structure ${item}`} variant="outlined" onClick={()=>addComponent(item)}/>
           </Grid>
           )
        })}
        </Grid>
    
  )
}

export default ShowStructure