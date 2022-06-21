import { Game } from "../../resources/types"

export const initialCartState: {
    addedGames: []
  } = {
    addedGames: [],
  }
  
  export const cartReducer = (
    state = initialCartState,
    action: any
  ) => {
    const { type, payload } = action
    switch (type) {
      case 'ADD_GAME_TO_CART': {
        const found = state.addedGames.some((game: Game) => game.id === payload.id)
        if (!found) {
          return {
            ...state,
            addedGames: [...state.addedGames, payload],
          }
        }
        else {
          return state
        }

      }
      case 'DELETE_GAME_FROM_CART': {
        const filteredGameList = state.addedGames.filter((game: Game) => game.id !== payload.id);
        return {
          ...state,
          addedGames: filteredGameList,
        }
      }
      default:
        return state
    }
  }