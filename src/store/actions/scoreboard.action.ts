import { Action } from '@ngrx/store';
import { Scoreboard } from '../../share/Scoreboard';

export const ActionTypes = {
    ADD_SCOREBOARD: '[Scoreboard] Add new ScoreBoard',
    UPDATE_SCOREBOARD: '[Scoreboard] Update ScoreBoard'
}
export class AddScoreBoardAction implements Action {
    type = ActionTypes.ADD_SCOREBOARD;
    constructor(public payload: Scoreboard) { }
}

export class UpdateScoreBoardAction implements Action {
    type = ActionTypes.UPDATE_SCOREBOARD;
    constructor(public payload: Scoreboard) { }
}
export type Actions = AddScoreBoardAction |
    UpdateScoreBoardAction;