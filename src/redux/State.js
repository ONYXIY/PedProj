const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
      friends: [
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
  subs(obs) {
    this._callSubscriber = obs;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this._state);

    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}
export const sendMessageCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewMessageBodyCreator = () => {
  return {
    type: ADD_POST
  }
}
export default store;