// src/state/rootReducer.js
import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import fbase from './fbase/fbaseReducer';
import search from './search/searchReducer';

import user from './user/userReducer';

import playlist from './playlist/playlistReducer';

// TODO: import different reducers

// TODO: add imported reducers in object
export default combineReducers(
    { auth, fbase, search, user, playlist  }
);