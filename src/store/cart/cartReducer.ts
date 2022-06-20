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
        return {
          ...state,
          addedGames: [...state.addedGames, payload],
        }
      }
      case 'DELTE_GAME_FROM_CART': {
        return {
          ...state,
          addedGames: [...state.addedGames, payload],
        }
      }
      default:
        return state
    }
  }