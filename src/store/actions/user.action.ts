import {Action} from '@ngrx/store';
import {User} from '../../share/User';

export const ActionTypes = {
    ADD_USER: '[User] Add new user',
    DELETE_USER: '[User] Delete user',
    UPDATE_USER: '[User] Update user',
    UPDATE_TOTAL_POINT_USER:'[User] Update total point user'
}
export class AddUserAction implements Action{
    type = ActionTypes.ADD_USER;
    constructor(public payload: User){}
}
export class DeleteUserAction implements Action {
    type = ActionTypes.DELETE_USER;
    constructor(public payload: User){}
}

export class UpdateUserAction implements Action {
    type = ActionTypes.UPDATE_USER;
    constructor(public payload: User){}
}

export class UpdateToltalPointUserAction implements Action {
    type = ActionTypes.UPDATE_TOTAL_POINT_USER;
    constructor(public payload){}
}
export type Actions = AddUserAction |
                    DeleteUserAction|
                    UpdateUserAction|
                    UpdateToltalPointUserAction;