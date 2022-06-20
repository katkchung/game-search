import { combineReducers } from 'redux'
import {cartReducer } from './cart/cartReducer'
import { gameSearchReducer } from './gameSearch/gameSearchReducer'

export const rootReducer: any = combineReducers({
  cart: cartReducer,
  gameSearch: gameSearchReducer
})

export type AppState = ReturnType<typeof rootReducer>