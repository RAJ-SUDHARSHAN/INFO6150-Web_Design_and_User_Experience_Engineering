import menu from "../data/menu";
import "../css/GlobalNav.css";
import "../css/ggMenu.css";
import { useState } from "react";

function GlobalNav({ className, onNav }) {
    const list = menu.map((item) => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a
                    onClick={onNav}
                    className="global-nav__link"
                    href={item.path}
                    data-target={item.name}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const [showMenu, setShowMenu] = useState(false);
    const menuIcon = showMenu ? "gg-close" : "gg-menu";
    const menuClass = showMenu
        ? "global-nav__list--open"
        : "global-nav__list--closed";
    return (
        <nav className={`global-nav ${className}`}>
            <button
                className="global-nav__toggle"
                aria-label={showMenu ? "Close Menu" : "Open Menu"}
                onClick={() => setShowMenu(!showMenu)}
            >
                <span className={menuIcon} />
            </button>
            <ul className={`global-nav__list ${menuClass}`}>{list}</ul>
        </nav>
    );
}

export default GlobalNav;
