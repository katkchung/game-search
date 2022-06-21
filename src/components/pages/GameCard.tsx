import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import {
  addGameToCart,
  deleteGameFromCart,
} from "../../store/cart/cartActions";
import { Game } from "../../resources/types";
import { Box, Button } from "@mui/material";

const styles = () => {
  return {
    card: {
      height: "400px",
    },
    title: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
    },
    description: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 3,
      "-webkit-box-orient": "vertical",
    },
    img: {
      width: "128px",
      height: "128px",
      borderRadius: "50%",
      marginBottom: "8px",
    },
  };
};

const useStyles = makeStyles(styles);

export interface Props {
  game: Game;
  addGameToCart: Function;
  deleteGameFromCart: Function;
  inCart?: boolean;
}

const GameCard = ({
  game,
  addGameToCart,
  deleteGameFromCart,
  inCart,
}: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Card
        sx={{ flexDirection: "column" }}
        className={classes.card}
        variant="outlined"
      >
        <CardMedia
          component="img"
          height="200"
          image={game.driverImageUrl}
          alt={game.name}
        />
        <CardContent>
          <Box sx={{ height: "65px" }}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
              component="div"
            >
              {game.name}
            </Typography>
          </Box>
          <Box sx={{ height: "70px" }}>
            <Typography
              gutterBottom
              variant="caption"
              className={classes.description}
            >
              {game.deck}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "end" }} alignContent="right">
            {inCart ? (
              <Button
                sx={{ alignContent: "center" }}
                variant="contained"
                onClick={() => {
                  deleteGameFromCart(game);
                }}
              >
                - Remove from Cart
              </Button>
            ) : (
              <Button
                sx={{ alignContent: "center" }}
                variant="contained"
                onClick={() => {
                  addGameToCart(game);
                }}
              >
                + Add to Cart
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

const mapDispatchToProps = {
  addGameToCart,
  deleteGameFromCart,
};

export default connect(null, mapDispatchToProps)(GameCard);
