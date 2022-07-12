export default (state, action) => {
    switch (action.type) {

        case 'IS_AUTH':
            return {
            ...state,
                isAuth: true,
                chatID: action.payload.chatID,
                userName: action.payload.userName,
            };

        case 'SET_DATA':
            return {
                ...state,
                users: action.payload.users,
                messages: action.payload.messages,
            };

        case 'SET_USER':
            return {
                ...state,
                users: action.payload,
            };

        case 'NEW_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        default:
            return state;
    }
}