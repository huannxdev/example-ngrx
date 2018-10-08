import * as account from '../actions/account.action'
export interface State {
    currentUser: string;
};
const initialState: State = {
    currentUser: ''
}
export function reducer(state = initialState, action: account.Actions): State {
    switch (action.type) {
        case account.ActionTypes.LOGIN_SUCCESSFULLY:
            const currentUser = (action as account.LoginSuccessfullyAction).payload;
            return {
                ...state,
                currentUser: currentUser
            };
        default: {
            return state;
        }
    }
}

export const getUserCurrent = (state: State) => state.currentUser;