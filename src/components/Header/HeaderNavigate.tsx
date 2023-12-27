import {FC} from "react";
import {Button} from "../UI/Button/Button.tsx";

import style from './Header.module.css'

const HeaderNavigate:FC = () => {
    return (
        <div className={style.navigate}>
            <Button>Users</Button>
            <Button>Sign Up</Button>
        </div>
    );
};

export default HeaderNavigate;