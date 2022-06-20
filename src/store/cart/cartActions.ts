
import axios from 'axios';
import { GIANT_BOMB_KEY } from '../../resources/constants';

export const setSearchTerm = (searchTerm: string) => async (dispatch: any) => {
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
    console.error("Can't set seach term", err);
    return undefined
  }
};