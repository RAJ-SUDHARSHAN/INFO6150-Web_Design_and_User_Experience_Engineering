import GlobalNav from "./GlobalNav";
import "../css/Header.css";

function Header({ onNav }) {
    return (
        <header className="header">
            <h1 className="header__title">-S U P E R K A R T-</h1>
            <GlobalNav className="header__nav" onNav={onNav} />
        </header>
    );
}

export default Header;
