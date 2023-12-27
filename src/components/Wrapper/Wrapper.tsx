import {FC} from "react";
import style from './Wrapper.module.css'

interface IWrapper {

}
const Wrapper:FC<IWrapper> = () => {
    return (
        <div className={style.wrapper}>
           <div className={style.container}>
                sadsadasd
           </div>
        </div>
    );
};

export default Wrapper;