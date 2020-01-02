export interface IActionSetAlert {
  type: 'SET_ALERT',
  alertMsg: string,
  alertType: any,
  id?: any,
}

export interface IActionRemoveAlert {
  type: 'REMOVE_ALERT'
}

export type IActionAlert = IActionSetAlert | IActionRemoveAlert