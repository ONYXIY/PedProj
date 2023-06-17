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
  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state)
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = .newText;
  //   this._callSubscriber(this._state)
  // },
  subs(obs) {
    this._callSubscriber = obs;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    }

  }
}
export default store;