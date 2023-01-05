import { useContext, useEffect, useState } from 'react';
import { toogleAlert } from '../context/root.actions';
import { RootContext } from '../context/root.provider';
import styles from '../styles/validationAlert.module.css';
import { isMobile } from 'react-device-detect';
import dynamic from 'next/dynamic';

export type IValidationAlertProps = {
    align: 'left' | 'right' | 'center';
    title: string;
    description: string;
    show: boolean;
}

 function ValidationAlert() {
    const { state, dispatch } = useContext(RootContext);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const dismissAlert = () => {
        dispatch(new toogleAlert({align: 'right', description:'', show: false, title: ''}))
    }
    
    return (
        <div 
            className={`${styles.container} ${state.alert.show ? styles.show : styles.hide}`} 
            data-align={!isMobile ? state.alert.align : 'center'} 
            style={{top: scrollPosition + 20}}
            onClick={dismissAlert}
        >
            <h3>{state.alert.title}</h3>
            <p>{state.alert.description}</p>
        </div>
    )
}

export default dynamic(() => Promise.resolve(ValidationAlert), {
    ssr: false,
})