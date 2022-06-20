import { useState, useEffect } from "react";
import { getGameSearchResults } from "../../../store/gameSearch/gameSearchActions";
import { Grid, Typography } from "@mui/material";
import { AppState } from "../../../store/rootReducer";
import { connect } from "react-redux";
import { Game } from "../../../resources/types";

export interface Props {
  games: Game[];
}

const SearchResults = ({ games }: Props) => {
  return (
    <Grid container spacing={2}>
      {games &&
        games.map((game: Game) => (
          <Grid item xs={3}>
            {game.name}
          </Grid>
        ))}
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({
  searchTerm: state.gameSearch.searchTerm,
});

export default connect(mapStateToProps)(SearchResults);

/*
import { useState, useEffect } from "react";
import { getLocalCoffeeShops } from "../../apis/yelpActions";
import ShopCard from "../ShopCard";
import { Grid } from "@mui/material";
import { Coffeeshop, Coordinates } from "../../types";
import CircularProgress from "@mui/material/CircularProgress";

export interface Props {
  currentAddress: string;
  currentCoordinates: Coordinates;
}

const CoffeeshopList = ({ currentCoordinates, currentAddress }: Props) => {
  const [coffeeShops, setCoffeeShops] = useState<Coffeeshop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getLocalCoffeeShops(currentCoordinates, currentAddress).then(
      (result: Coffeeshop[]) => {
        setCoffeeShops(result);
        setLoading(false);
      }
    );
  }, [currentCoordinates]);

  return (
    <div>
      {loading && <CircularProgress />}
      <Grid container spacing={2}>
        {coffeeShops &&
          coffeeShops
            .sort((a: Coffeeshop, b: Coffeeshop) =>
              a.drivingTime.minutes < b.drivingTime.minutes ? -1 : 1
            )
            .map((shop: Coffeeshop) => (
              <Grid item key={shop.address} xs={3}>
                <ShopCard
                  name={shop.name}
                  address={shop.address}
                  imageUrl={shop.imageUrl}
                  drivingTime={shop.drivingTime}
                />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default CoffeeshopList;
*/
