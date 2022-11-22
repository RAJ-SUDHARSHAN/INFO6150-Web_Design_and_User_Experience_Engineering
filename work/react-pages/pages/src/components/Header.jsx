import GlobalNav from "./GlobalNav";
import '../css/Header.css'

function Header( { onNav }) {
    return (
        <header className="header">
            <img src="http://placekitten.com/100/100?image=1" className="header__logo" alt="Cats Power the Internet Logo" />
            <h1 className="header__title">
                Cats Power the Internet
            </h1>
            <GlobalNav className="header__nav" onNav={onNav}/>
        </header>
    )
}

export default Header;