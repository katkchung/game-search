
import axios from 'axios';
import { GIANT_BOMB_KEY } from '../../resources/constants';
import { Game } from '../../resources/types';

export const setGameSearchTerm = (searchTerm: string) => async (dispatch: any) => {
  try {
      /*
    const res = await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=coffee&latitude=${lat}&longitude=${long}`,
        {
          headers: {
            Authorization:  YELP_BEARER_TOKEN,
          }
        }
      )
      const coffeeshops = res.data.businesses.map((shop: any) => ({name: shop.name, address: shop.location.address1.concat(", ", shop.location.city, ", ", shop.location.state, " ", shop.location.zip_code)}))*/
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
    console.log("GETS HERE")
    console.log("searchTerm", searchTerm)
    const res = await axios
      .get(
`https://www.giantbomb.com/api/search/?api_key=9bf895bb3792a7b620ca661d231c2a07680812dd&format=json&query=%22${searchTerm}22&resources=game&field_list=%22aliases,id,deck,aliases,image,release_date%22`      )
      console.log("Results", res.data)
      const gameResults = res.data.results.map((result: any) => ({id: result.id, name: result.name, driverImageUrl: result.image.medium_url, shortDescription: result.deck}))
      dispatch({
        type: 'GET_GAMES_FROM_KEYWORD',
        payload: gameResults
      })
  } catch (err) {
    throw(err)
  }
} 

//        `https://www.giantbomb.com/api/search/?api_key=${GIANT_BOMB_KEY}&format=json&query=${searchTerm}&resources=game&field_list="release_date,id,deck,name,image`

