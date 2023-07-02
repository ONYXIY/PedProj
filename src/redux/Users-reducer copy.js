const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'


let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Rustam', status: 'im React pro', iocation: { city: 'Chelyabinsk', country: 'Russia' } },
        { id: 2, followed: false, fullName: 'John', status: 'im pro player', iocation: { city: 'NY', country: 'USA' } },
        { id: 3, followed: true, fullName: 'Arina', status: 'twitchTV', iocation: { city: 'Chelyabinsk', country: 'Russia' } }
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };



        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        default:
            return state;

    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })

export default usersReducer;