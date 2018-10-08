import * as user from './User.reducer';
import * as userAction from '../actions/user.action';
import {User} from '../../share/User';
import { reducers } from '../reducers'
import {initialState} from './User.reducer'
import { DateTime } from 'ionic-angular';

describe('User Reducer', () => {
    describe('undefine action',() => {
        it('should return the default state', () => {
            const action = {type: 'NOOP'} as any;
            const result = reducers.user(undefined,action);
            })
    });
    describe('[User] Add new user',() => {
        it('should add a new user',() => {
            const action = new userAction.AddUserAction({id:'1',firstname:'nguyen',lastname:'huan',dateofbirth: new Date("2015-03-25") ,totalPoint:0});
            const result = reducers.user(initialState,action);
            expect(result).toEqual({
                ...initialState,
                listUser: [{id:'1',firstname:'nguyen',lastname:'huan',dateofbirth: new Date("2015-03-25") ,totalPoint:0}]
            });
        });
    })
});