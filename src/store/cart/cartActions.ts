import { Game } from '../../resources/types';

export const addGameToCart = (newGame: Game) => async (dispatch: any) => {
  try {
      dispatch({
        type: 'ADD_GAME_TO_CART',
        payload: newGame
      })
  } catch (err) {
    throw(err)
  }
};

export const deleteGameFromCart = (discardedGame: Game) => async (dispatch: any) => {
  try {
      dispatch({
        type: 'DELETE_GAME_FROM_CART',
        payload: discardedGame
      })
  } catch (err) {
    throw(err)
  }
};

