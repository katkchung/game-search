import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import TopNav from "../../nav/TopNav";
import beetleBrand from "../../../imgs/beetle_brand.png";

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
          height: "100%",
        }}
      >
        <Grid item>
          <Typography variant="h3"> Welcome to </Typography>
        </Grid>
        <Grid item>
          <img src={beetleBrand} alt="Beetle's Backpack Logo" />
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="h6"> Let's get started. </Typography>
          <Box sx={{ pt: "16px" }}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              color="primary"
              data-testid="start-search-button"
            >
              Start Search
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
