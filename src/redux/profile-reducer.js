const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialStore = {
  posts: [
    { id: 1, message: 'Im mage', likeCount: 12 },
    { id: 2, message: 'Im warrior', likeCount: 0 },
    { id: 3, message: 'Im druid', likeCount: 22 },
    { id: 4, message: 'Im idiot', likeCount: 55 },
    { id: 5, message: 'go 1v1 noob', likeCount: 1 }
  ],
  newPostText: 'one,two,three',
};

const profileReducer = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: state.newPostText = action.newText;
        return state;
        default:
            return state;

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


export default profileReducer;