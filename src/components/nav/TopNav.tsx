import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import backpackIcon from "../../imgs/backpack_icon.png";

const styles = () => {
  return {
    links: {
      fontFamily: "Raleway, san-serif",
      textTransform: "none" as const,
      color: "#000",
      textDecoration: "underline 0.15em rgba(0, 0, 0, 0)",
      textUnderlineOffset: "14px",
      transition: "text-decoration-color 1000ms, text-underline-offset 1000ms",
      "&:hover": {
        textDecorationColor: "rgba(0,0,0,1)",
      },
    },
    icon: {
      height: "50px",
    },
  };
};

const useStyles = makeStyles(styles);

const TopNav = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{
        width: "100%",
        pt: "24px",
        pb: "8px",
        pl: "24px",
        marginBottom: "14px",
      }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="flex-start"
        spacing={3}
        xs
      >
        <Grid item sx={{ marginTop: "-12px", mr: "-10px" }}>
          <Link to="/" className={classes.links} data-testid="top-nav-home">
            <img className={classes.icon} src={backpackIcon} alt="Home" />
          </Link>
        </Grid>
        <Grid item>
          <Link
            to="/search"
            className={classes.links}
            data-testid="top-nav-search"
          >
            <Typography variant="h5">Search</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/cart" className={classes.links} data-testid="top-nav-cart">
            <Typography variant="h5">Cart</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopNav;
