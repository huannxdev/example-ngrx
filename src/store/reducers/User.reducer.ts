import { User } from "../../share/User";
import * as user from '../actions/user.action';
import * as _ from 'lodash';
import { Action } from "@ngrx/store";
export interface State {
    listUser: User[];
};
export const initialState: State = {
    listUser: []
}
export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case user.ActionTypes.ADD_USER:
            const newUser = (action as user.AddUserAction).payload;
            let listUserCurrent = _.cloneDeep(state.listUser);
            listUserCurrent.push(newUser);
            return {
                ...state,
                listUser: listUserCurrent
            };
        case user.ActionTypes.DELETE_USER:
            const currentUser = (action as user.DeleteUserAction).payload;
            let listUser = _.cloneDeep(state.listUser);
            listUser = listUser.filter(a => a.lastname != currentUser.lastname)
            return {
                ...state,
                listUser: listUser
            };
        case user.ActionTypes.UPDATE_USER:
            const updatedUser = (action as user.UpdateUserAction).payload;
            let listcurrentUser = _.cloneDeep(state.listUser);
            listcurrentUser.forEach(element => {
                if(element.id === updatedUser.id){
                    element = updatedUser;
                }
            });
            return {
                ...state,
                listUser: listcurrentUser
            };
        case user.ActionTypes.UPDATE_TOTAL_POINT_USER:
            const point = (action as user.UpdateToltalPointUserAction).payload;
            let listPointUser = _.cloneDeep(state.listUser);
            listPointUser.forEach(element => {
                if(element.id === point.id){
                    element.totalPoint = point.math + point.physical + point.chemistry;
                }
            });
            return {
                ...state,
                listUser: listPointUser
            };
        default: {
            return state;
        }
    }
}

export const getListUser = (state: State) => state.listUser;