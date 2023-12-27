import {FC} from "react";
import {LogoIcon, LogoText} from "./index.ts";

import style from "./Logo.module.css"

const Logo:FC = () => {
    return (
        <div className={style.wrapper}>
          <LogoIcon/>
          <LogoText/>
        </div>
    );
};

export default Logo;