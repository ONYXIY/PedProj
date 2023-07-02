import bestFriendsReducer from "./bestFriends-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Im mage', likeCount: 12 },
        { id: 2, message: 'Im warrior', likeCount: 0 },
        { id: 3, message: 'Im druid', likeCount: 22 },
        { id: 4, message: 'Im idiot', likeCount: 55 },
        { id: 5, message: 'go 1v1 noob', likeCount: 1 }
      ],
      newPostText: 'one,two,three',
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Hui' }
      ],
      dialogs: [
        { id: 1, name: 'Sanya' },
        { id: 2, name: 'Vvados' },
        { id: 3, name: 'Vvados' },
        { id: 4, name: 'Gaga(Artem)' },
        { id: 5, name: 'Artem' }
      ],
      newMessageBody: "",
      bestFriends: [
        { id: 1, friend: 'Sanya' },
        { id: 2, friend: 'Vvados' },
        { id: 3, friend: 'Woman' }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state) {
    console.log('StateWork');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.bestFriends = bestFriendsReducer(this._state.bestFriends, action);
    
    this._callSubscriber(this._state);
  }
}



export default store;