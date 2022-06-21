import { Grid } from "@mui/material";
import { AppState } from "../../../store/rootReducer";
import { connect } from "react-redux";
import { Game } from "../../../resources/types";
import GameCard from "../GameCard";

export interface Props {
  games: Game[];
}

const SearchResults = ({ games }: Props) => {
  return (
    <Grid
      container
      sx={{ p: "16px" }}
      direction="row"
      spacing={2}
      alignItems="stretch"
    >
      {games &&
        games.map((game: Game) => (
          <Grid item key={game.id} xs={3}>
            <GameCard game={game} />
          </Grid>
        ))}
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({
  games: state.gameSearch.games,
});

export default connect(mapStateToProps)(SearchResults);
