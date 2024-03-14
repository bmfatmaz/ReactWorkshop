import { combineReducers } from "redux";
import events from "./slices/eventSlice";
import wishlist from "./slices/wishlistSlice";
const reducers = combineReducers({
  events,
  wishlist,
});
export default reducers;
