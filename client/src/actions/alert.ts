import { Dispatch } from "redux";
import { IActionSetAlert } from "../reducers/alert-action-types";
import uuid from 'uuid';

export const setAlert = (msg: string, alertType: any) => {
    return (dispatch: Dispatch<IActionSetAlert>) => {
        const id = uuid.v4();
        dispatch({
            type: 'SET_ALERT',
            alertMsg: msg,
            alertType: alertType,
            id: id
        })
    }
}