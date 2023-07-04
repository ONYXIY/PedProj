import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import bestFriendsReducer from './bestFriends-reducer';
import usersReducer from "./usersReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    bestFriends: bestFriendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;