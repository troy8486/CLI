import { ActionTypes } from "../action-types";
import { Cell, CellTypes } from "../cell";

export type Direction = 'up' | 'down';

export interface MoveCellAction {
    type: ActionTypes.MOVE_CELL;
    payload: {
        id: string;
        direction: Direction;
    }
}

export interface DeleteCellAction {
    type: ActionTypes.DELETE_CELL;
    payload: string; // id

}

export interface InsertCellBeforeAction {
    type: ActionTypes.INSERT_CELL_BEFORE;
    payload: {
        id: string;
        type: CellTypes;
    }
}

export interface UpdateCellAction {
    type: ActionTypes.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    }
}

export type Action = MoveCellAction | DeleteCellAction | InsertCellBeforeAction | UpdateCellAction