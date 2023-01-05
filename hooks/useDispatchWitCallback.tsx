import { useContext, useEffect, useRef, useState } from 'react'
import { ActionType } from '../context/root.actions';
import { RootContext } from '../context/root.provider';
import { IRootState } from '../context/root.reducer';

export const useDispatchWithCallBack = () => {
    const [lastType, setLastType] = useState<string | null>(null)
    const callbackRef = useRef<(type: string | null, data?: IRootState) => void | null>();
    const {state, dispatch} = useContext(RootContext);

    useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current?.(lastType, state);
            callbackRef.current = undefined;
        };
    }, [state]);

    const customDispatch = (action: ActionType, callback?: (type?: string | null, data?: IRootState) => void) => {
        if (callback) {
            setLastType(action.type);
            callbackRef.current = callback;
        }
        dispatch(action);
    };

    return {state, customDispatch};
}