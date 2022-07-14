export default (state, action) => {
    switch (action.type) {

        case 'IS_AUTH':
            return {
            ...state,
                isAuth: true,
                chatID: action.payload.chatID,
                userName: action.payload.userName,
            };
            /*it is for entering the chat*/

        case 'SET_DATA':
            return {
                ...state,
                users: action.payload.users,
                messages: action.payload.messages,
            };
            /*This for getting data when user enters the chat*/


        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };
            /*list users of the chat*/

        case 'NEW_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
            /*for new messages*/

        default:
            return state;
    }
}