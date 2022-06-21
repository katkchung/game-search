
import axios from 'axios';
import { GIANT_BOMB_KEY } from '../../resources/constants';

export const setGameSearchTerm = (searchTerm: string) => async (dispatch: any) => {
  try {
      dispatch({
        type: 'SET_SEARCH_TERM',
        payload: searchTerm
      })
  } catch (err) {
    throw(err)
  }
};

export const getGameSearchResults = (searchTerm: string) => async (dispatch: any) => {
  try {
    const res = await axios
      .get(
`https://www.giantbomb.com/api/search/?api_key=${GIANT_BOMB_KEY}&format=json&query=${searchTerm}&resources=game&field_list=%22aliases,id,deck,name,image,release_date%22`      )
      const gameResults = res.data.results.map((result: any) => ({id: result.id, name: result.name, driverImageUrl: result.image.medium_url, deck: result.deck}))
      dispatch({
        type: 'GET_GAMES_FROM_KEYWORD',
        payload: gameResults
      })
  } catch (err) {
    throw(err)
  }
} 
