let rerenderEntireTree =() =>{
  console.log('StateWork');
}

const state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subs = (obs) =>{
  rerenderEntireTree = obs;
};
  export default state;