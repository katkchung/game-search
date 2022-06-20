import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { AppState } from "../../store/rootReducer";
import { connect } from "react-redux";
import {
  getGameSearchResults,
  setGameSearchTerm,
} from "../../store/gameSearch/gameSearchActions";

const styles = () => {
  return {
    root: {
      paddingTop: "32px",
    },
    logo: {
      height: "50px",
    },
  };
};

const useStyles = makeStyles(styles);

export interface Props {
  setGameSearchTerm: Function;
  searchTerm: string;
  getGameSearchResults: Function;
}

const SearchBar = ({
  setGameSearchTerm,
  searchTerm,
  getGameSearchResults,
}: Props) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState<string>(searchTerm);
  console.log("The search term", searchTerm);

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item xs>
          <TextField
            label="Keyword/Title"
            variant="outlined"
            value={searchInput}
            onChange={(event) => setSearchInput(event?.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={1} pl={1}>
          <Button
            variant="contained"
            onClick={() => {
              if (searchInput !== "") {
                getGameSearchResults(searchInput);
                setGameSearchTerm(searchInput);
              }
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  searchTerm: state.gameSearch.searchTerm,
});

const mapDispatchToProps = {
  setGameSearchTerm,
  getGameSearchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
