import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";

const styles = () => {
  return {
    navText: {
      fontFamily: "Raleway, san-serif",
      textTransform: "none" as const,
    },
    links: {
      color: "#000",
      textDecoration: "underline 0.15em rgba(0, 0, 0, 0)",
      textUnderlineOffset: "8px",
      transition: "text-decoration-color 1000ms, text-underline-offset 1000ms",
      "&:hover": {
        textDecorationColor: "rgba(0,0,0,1)",
      },
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
        pt: "16px",
        pb: "4px",
        pl: "24px",
        marginBottom: "16px",
        backgroundColor: "rgba(1255,174,66, 0.35)",
      }}
    >
      <Grid item container justifyContent="center" xs={2}>
        <Grid item xs>
          <Link to="/" className={classes.links}>
            <Typography variant="h5" className={classes.navText}>
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item xs>
          <Button
            component={Link}
            to={"/search"}
            sx={{
              px: "0px",
              ":hover": {
                backgroundColor: "transparent",
              },
              "& .MuiTouchRipple-root span": {
                backgroundColor: "transparent",
                opacity: 0.3,
              },
            }}
            fullWidth
          >
            <Typography variant="body2" className={classes.navText}>
              Search Games
            </Typography>
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            component={Link}
            to={"/cart"}
            sx={{
              px: "0px",
              ":hover": {
                backgroundColor: "transparent",
              },
              "& .MuiTouchRipple-root span": {
                backgroundColor: "transparent",
                opacity: 0.3,
              },
            }}
            fullWidth
          >
            <Typography variant="body2" className={classes.navText}>
              Cart
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopNav;
