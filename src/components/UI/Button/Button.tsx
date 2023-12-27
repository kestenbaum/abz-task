import {FC} from 'react';
import style from './Button.module.css'
import {IButton} from "../../../interface";


export const Button:FC<IButton> = (props) => {
    const {children, ...rest} = props

    return (
        <button className={style.btn} {...rest}>
            {children}
        </button>
    );
};