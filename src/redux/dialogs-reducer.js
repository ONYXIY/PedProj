const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
        bestFriends: [
          { id: 1, friend: 'Sanya' },
          { id: 2, friend: 'Vvados' },
          { id: 3, friend: 'Woman' }
        ],
        newMessageBody: ""
      
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }

}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
}

export default dialogsReducer;