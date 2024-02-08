import { ActionTypes } from "../action-types";
import { Action, UpdateCellAction, DeleteCellAction, MoveCellAction, InsertCellBeforeAction, Direction } from "../actions";
import { CellTypes } from "../cell";

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionTypes.UPDATE_CELL,
        payload: {
            id,
            content
        }
    }
}

export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionTypes.DELETE_CELL,
        payload: id
    }
}

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionTypes.MOVE_CELL,
        payload: {
            id,
            direction
        }
    }
}
export const insertCellBefore = (id: string, cellType: CellTypes): InsertCellBeforeAction => {
    return {
        type: ActionTypes.INSERT_CELL_BEFORE,
        payload: {
            id,
            type: cellType
        }
    }
}