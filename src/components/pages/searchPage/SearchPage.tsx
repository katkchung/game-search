import { Grid, Typography } from "@mui/material";
import TopNav from "../../nav/TopNav";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import beetleIcon from "../../../imgs/beetle_bug.png";

const SearchPage = () => {
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
        direction="row"
        spacing={2}
        sx={{
          backgroundColor: "rgba(77, 166, 247, 0.5)",
          pb: "24px",
          boxShadow: "5",
        }}
      >
        <Grid item>
          <img style={{ height: "50px" }} src={beetleIcon} alt="Home" />
        </Grid>
        <Grid item>
          <Typography variant="h3"> What are we playing today? </Typography>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <SearchBar />
      </Grid>
      <Grid item xs={11}>
        <SearchResults />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
