export default (state, action) => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
            ...state,
                isAuth: true,
                chatID: action.payload.chatID,
                userName: action.payload.userName,
            };

        default:
            return state;
    }
}