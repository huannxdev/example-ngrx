import {Action} from '@ngrx/store';
import {Accounts} from '../../share/Account';

export const ActionTypes = {
    LOGIN: '[Account] Login',
    LOGIN_SUCCESSFULLY: '[Account] Login Successfully'
}
export class LoginAction implements Action {
    type = ActionTypes.LOGIN;
    constructor(public payload: Accounts){}
}
export class LoginSuccessfullyAction implements Action {
    type = ActionTypes.LOGIN_SUCCESSFULLY;
    constructor(public payload: string){}
}

export type Actions = LoginAction|
                    LoginSuccessfullyAction;