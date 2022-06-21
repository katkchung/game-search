import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import { AppState } from "../../../store/rootReducer";
import { connect } from "react-redux";
import { Game } from "../../../resources/types";
import GameCard from "../GameCard";

export interface Props {
  addedGames: Game[];
}

const Cart = ({ addedGames }: Props) => {
  console.log("current games in cart:", addedGames);
  return (
    <Box>
      <Grid
        container
        sx={{ p: "16px" }}
        spacing={2}
        justifyContent="flex-start"
      >
        {addedGames
          ? addedGames.map((game: Game) => (
              <Grid item key={game.id} xs={3}>
                <GameCard game={game} inCart />
              </Grid>
            ))
          : null}
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{ pr: "16px" }}
        justifyContent="flex-end"
        alignContent="flex-end"
      >
        {addedGames && addedGames.length > 0 ? (
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            color="primary"
            sx={{ fontSize: "large", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            data-testid="cart-checkout-button"
          >
            Proceed to Checkout
          </Button>
        ) : null}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => ({
  addedGames: state.cart.addedGames,
});

export default connect(mapStateToProps)(Cart);
