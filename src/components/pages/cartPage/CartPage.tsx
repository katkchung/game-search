import { Grid, Typography } from "@mui/material";
import TopNav from "../../nav/TopNav";
import Cart from "./Cart";

const CartPage = () => {
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
          pb: "24px",
          boxShadow: "5",
        }}
      >
        <Grid item>
          <Typography variant="h3"> Current Items in Pack </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Cart />
      </Grid>
    </Grid>
  );
};

export default CartPage;
