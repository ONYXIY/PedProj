import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'set_users';
const SET_CURREND_PAGE = 'SET_CURREND_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

};

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
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURREND_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        } default:
            return state;

    }
};

export const setCurrentPage = (currentPage) => ({ type: SET_CURREND_PAGE, currentPage })
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const followSuccess = (userID) => ({ type: FOLLOW, userID })
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
    }
}

export const follow = (userId, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgProgress(false, userId))
        });
    }
}
export const unfollow = (userId, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgProgress(false, userId))
        });
    }
}

export default usersReducer;