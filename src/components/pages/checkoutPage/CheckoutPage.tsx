import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { Game } from "../../../resources/types";
import { connect } from "react-redux";
import { AppState } from "../../../store/rootReducer";
import beetleIcon from "../../../imgs/beetle_bug.png";

export interface Props {
  addedGames: Game[];
}

const CheckoutPage = ({ addedGames }: Props) => {
  const totalBalance = addedGames ? 5 * addedGames.length : 0;
  //temporary way to calculate total balance with arbitrary $5 price

  return (
    <Grid
      sx={{ pt: "16px" }}
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Grid item xs={12} sx={{ mb: "24px", ml: "16px" }}>
        <Button
          component={Link}
          to="/cart"
          variant="contained"
          color="primary"
          sx={{ fontSize: "large", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          data-testid="back-to-cart-button"
        >
          Back to Cart
        </Button>
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
          pb: "18px",
          pr: "16px",
          boxShadow: "5",
        }}
      >
        <Grid item>
          <img style={{ height: "50px" }} src={beetleIcon} alt="Home" />
        </Grid>
        <Grid item>
          <Typography variant="h3"> Checkout </Typography>
        </Grid>
      </Grid>
      <Grid container item>
        {addedGames
          ? addedGames.map((game: Game) => (
              <Grid item xs={12} sx={{ p: "16px" }}>
                <Typography variant="h6">{game.name} x 1 @ $5/week</Typography>
              </Grid>
            ))
          : null}
      </Grid>
      <Grid item sx={{ textAlign: "end" }}>
        <Typography variant="h5">Total Balance: ${totalBalance}</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-end"
        alignContent="flex-end"
        sx={{ pr: "16px" }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: "large", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          data-testid="payment-page-button"
          disabled
        >
          Proceed to Payment
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({
  addedGames: state.cart.addedGames,
});

export default connect(mapStateToProps)(CheckoutPage);
