import { IValidationAlertProps } from "../components/validationAlert";
import { ActionType, RootActions } from "./root.actions";

export interface Cart {
    id: number;
    image: string;
    name: string;
    price: number;
    copies: number;
    quantity: number;
}

export interface IRootState {
    cart: Cart[];
    alert: IValidationAlertProps
}


export const initialRootState: IRootState = {
    cart: [],
    alert: {
        align: 'left',
        description: '',
        show: false,
        title: ''
    }
};
  
export const rootReducer = (state: IRootState, action: ActionType): IRootState => {
    switch (action.type) {
        case RootActions.ADD_TO_CART:
            if(!state.cart.some( cartState => cartState.id === action.payload.id )) {
                const newCart = [...state.cart.concat([action.payload])]
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    ...state,
                    cart: newCart
                };
            }

            return {...state}
        case RootActions.REMOVE_FROM_CART:
            const removeElement = state.cart.filter(
                item => item.id !== action.payload.id
            );
            localStorage.setItem('cart', JSON.stringify( removeElement ));
            return {
                ...state,
                cart: [...removeElement]
            };
        case RootActions.UPDATE_ITEM:
            const updateElement = state.cart.map(
                item => {
                    if (item.id === action.payload.id) {
                        item = {...item, quantity: action.payload.quantity}
                    }
                    return {...item}
                }
            );
            localStorage.setItem('cart', JSON.stringify( updateElement ));
            return {
                ...state,
                cart: [...updateElement]
            };
        case RootActions.TOOGLE_ALERT:
            return {
                ...state,
                alert: {
                    ...action.payload
                }
            };
        default:
            return {...state};
    }
};