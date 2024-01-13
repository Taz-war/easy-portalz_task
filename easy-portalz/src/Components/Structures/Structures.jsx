import { Container, Grid, Paper } from "@mui/material";
import React from "react";

const Structures = ({ item }) => {
  const gridItems = [];

  let values = item.split(","); // Split the string at each colon

  // Convert each string value to a number
  let numbers = values.map((value) => parseInt(value));
  console.log(values);

//   for (let i = 0; i < item; i++) {
//     gridItems.push(
//       <Grid
//         key={i}
//         item
//         md={12 / item}
//         sx={{ border: "1px dashed black", borderWidth: "thin" }}
//       >
//         {/* You can add content here inside each Grid item */}
//         Im fine what about you
//       </Grid>
//     );
//   }
  return (
    <Container>
      <Grid container columns={12} spacing={2} rowSpacing={3} mt={2} mb={2}>
        {numbers.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              md={item}
              sx={{ border: "1px dashed black", borderWidth: "thin" }}
            >
              {/* You can add content here inside each Grid item */}
              Im fine what about you
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Structures;
