import { IValidationAlertProps } from "../components/validationAlert";
import { Cart } from "./root.reducer";

export enum RootActions {
    ADD_TO_CART = '[CART] ADD_TO_CART',
    REMOVE_FROM_CART = '[CART] REMOVE_FROM_CART',
    UPDATE_ITEM = '[CART] UPDATE_ITEM',
    TOOGLE_ALERT = '[ALERT] SHOW_ALERT',
}

export type Action<T> = {
    type: string;
    payload: T
}

export class addToCart implements Action<Cart> {
    readonly type = RootActions.ADD_TO_CART

    constructor(public payload: Cart) {}
}

export class removeFromCart implements Action<{id: number}> {
    readonly type = RootActions.REMOVE_FROM_CART

    constructor(public payload: {id: number}) {}
}


export class updateItemCart implements Action<{id: number, quantity: number}> {
    readonly type = RootActions.UPDATE_ITEM

    constructor(public payload: {id: number, quantity: number}) {}
}

export class toogleAlert implements Action<IValidationAlertProps> {
    readonly type = RootActions.TOOGLE_ALERT

    constructor(public payload: IValidationAlertProps) {}
}


export type ActionType = addToCart | removeFromCart | updateItemCart | toogleAlert;