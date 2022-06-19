import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import YelpLogo from "../images/yelp_logo.svg";

const styles = () => {
  return {
    root: {
      margin: "16px",
      marginTop: "0px",
    },
    logo: {
      height: "50px",
    },
  };
};

const useStyles = makeStyles(styles);

export interface Props {
  setCurrentSearchTerm: Function;
}

const AddressInput = ({ setCurrentSearchTerm }: Props) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item xs>
          <img className={classes.logo} src={YelpLogo} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="Address"
            variant="outlined"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event?.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={1} pl={1}>
          <Button
            variant="contained"
            onClick={() => {
              if (searchTerm !== "") {
                setCurrentSearchTerm(searchTerm);
              }
            }}
          >
            Search For CoffeeShops
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressInput;
