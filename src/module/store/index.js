import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import live from '../live';
import map from '../map';
import user from '../user';

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  live, map, user
});

export default persistReducer(persistConfig, rootReducer);