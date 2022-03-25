import s from './Header.module.css'
import mainLogo from '../../img/main-logo.png'


function Header() {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'
                alt=""/>
        </header>
    )
}

export default Header;