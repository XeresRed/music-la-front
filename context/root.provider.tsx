import React, { createContext, useEffect, useReducer, useState } from 'react';
import { ActionType } from './root.actions';
import { Cart, initialRootState, IRootState, rootReducer } from './root.reducer';



export const RootContext = createContext<{state: IRootState, dispatch: React.Dispatch<ActionType>}>({
    state: initialRootState,
    dispatch: () => null
});

export const RootProvider = ({children, initialData}: React.PropsWithChildren<{initialData?: Cart[]}>) => {
    if (initialData) {
        initialRootState.cart = initialData
    }
    const [state, dispatch] = useReducer(rootReducer, initialRootState);

    return (
        <RootContext.Provider value={{state, dispatch}}>
            {children}
        </RootContext.Provider>
    )
}