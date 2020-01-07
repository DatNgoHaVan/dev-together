import { Dispatch } from "redux";
import { IActionAlert } from "../reducers/alert-action-types";
import uuid from 'uuid';

export const setAlert = (msg: string, alertType: any, timeout: number = 1000) => {
    return (dispatch: Dispatch<IActionAlert>) => {
        const id = uuid.v4();
        dispatch({
            type: 'SET_ALERT',
            alertMsg: msg,
            alertType: alertType,
            id: id
        });

        setTimeout(() => dispatch({ type: "REMOVE_ALERT", id: id }), timeout);
    };
}