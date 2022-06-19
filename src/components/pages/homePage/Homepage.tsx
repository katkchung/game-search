import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import TopNav from "../../nav/TopNav";

const Homepage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing="space-between"
    >
      <TopNav />
      <Grid container item xs={12} justifyContent="center">
        <Typography variant="h3"> Popular Games </Typography>
      </Grid>
    </Grid>
  );
};

export default Homepage;
