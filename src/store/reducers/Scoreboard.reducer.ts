import * as scoreboard from '../actions/scoreboard.action'
import { Scoreboard } from '../../share/Scoreboard';
import * as _ from 'lodash';
export interface State {
    listScoreBoard: Scoreboard[];
};
const initialState: State = {
    listScoreBoard: []
}
export function reducer(state = initialState, action: scoreboard.Actions): State {
    switch (action.type) {
        case scoreboard.ActionTypes.ADD_SCOREBOARD:
            const currentBoard = (action as scoreboard.AddScoreBoardAction).payload;
            let listCurrentBoard = _.cloneDeep(state.listScoreBoard);
            listCurrentBoard.push(currentBoard);
            return {
                ...state,
                listScoreBoard: listCurrentBoard
            };
        case scoreboard.ActionTypes.UPDATE_SCOREBOARD:
            const scoreBoard = (action as scoreboard.UpdateScoreBoardAction).payload;
            let listScoreBoardTemp = _.cloneDeep(state.listScoreBoard);
            listScoreBoardTemp.forEach(element => {
                if (element.idStudent === scoreBoard.idStudent) {
                    element = scoreBoard;
                }
            });
            return {
                ...state,
                listScoreBoard: listScoreBoardTemp
            };
        default: {
            return state;
        }
    }
}

export const getListScoreboard = (state: State) => state.listScoreBoard;