import style from  "./Header.module.css"
import Logo from "../Logo/Logo.tsx";
import HeaderNavigate from "./HeaderNavigate.tsx";
const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Logo/>
                    <HeaderNavigate/>
                </div>
            </div>
        </header>
    );
};

export default Header;