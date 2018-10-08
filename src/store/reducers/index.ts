import { ActionReducerMap } from '@ngrx/store';
import * as reducer from '../reducers/Account.reducer';
import * as userReducer from '../reducers/User.reducer';
import * as scoreBoardReducer from '../reducers/Scoreboard.reducer';

export interface State {
    account: reducer.State;
    user: userReducer.State;
    scoreBoard: scoreBoardReducer.State;

}
export const reducers: ActionReducerMap<State> = {
    account: reducer.reducer,
    user: userReducer.reducer,
    scoreBoard: scoreBoardReducer.reducer
}