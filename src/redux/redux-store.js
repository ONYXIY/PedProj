import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import bestFriendsReducer from './bestFriends-reducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    bestFriends: bestFriendsReducer
});

let store = createStore(reducers);

export default store;