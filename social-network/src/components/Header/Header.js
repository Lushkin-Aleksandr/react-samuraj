import styles from './Header.module.css'
import mainLogo from '../../img/main-logo.png'
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <header className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;