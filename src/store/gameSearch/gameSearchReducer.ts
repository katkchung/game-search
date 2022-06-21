import { Game } from "../../resources/types"

export const initialSearchState: {
    searchTerm: string
    games: Game[]

  } = {
    searchTerm: "",
    games: [],
  }
  
  export const gameSearchReducer = (
    state = initialSearchState,
    action: any
  ) => {
    const { type, payload } = action
    switch (type) {
      case 'SET_SEARCH_TERM': {
        return {
          ...state,
          searchTerm: payload
        }
      }
      case 'GET_GAMES_FROM_KEYWORD': {
        return {
          ...state,
          games: payload,
        }

      }
      default:
        return state
    }
  }