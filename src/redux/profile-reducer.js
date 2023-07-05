const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';



let initialStore = {
  posts: [
    { id: 1, message: 'Im mage', likeCount: 12 },
    { id: 2, message: 'Im warrior', likeCount: 0 },
    { id: 3, message: 'Im druid', likeCount: 22 },
    { id: 4, message: 'Im idiot', likeCount: 55 },
    { id: 5, message: 'go 1v1 noob', likeCount: 1 }
  ],
  newPostText: 'one,two,three',
  profile: null,
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {

      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    
    default:
      return state;
  }

};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});



export default profileReducer;