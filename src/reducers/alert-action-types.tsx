export interface IActionSetAlert {
  type: 'SET_ALERT',
  alertMsg: string,
  alertType: any,
  id: any,
}

export interface IActionRemoveAlert {
  type: 'REMOVE_ALERT',
  id: any,
}

export type IActionAlert = IActionSetAlert | IActionRemoveAlert