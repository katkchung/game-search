import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import TopNav from "../../nav/TopNav";
import SearchBar from "../../search/SearchBar";

const Homepage = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <TopNav />
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        alignContent="center"
        direction="column"
        spacing={2}
        sx={{
          backgroundColor: "rgba(77, 166, 247, 0.5)",
          pt: "12px",
          pb: "14px",
          boxShadow: "5",
        }}
      >
        <Grid item>
          <Typography variant="h3"> Welcome to Beetle's Backpack! </Typography>
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="h6"> What are we playing today? </Typography>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Homepage;
