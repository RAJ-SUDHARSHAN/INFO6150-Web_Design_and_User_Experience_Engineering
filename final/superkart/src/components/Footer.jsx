import { footerAbout, footerHelp, footerPolicy } from "../data/menu";
import '../css/Footer.css'

function Footer({ setPage }) {

    const about = footerAbout.map(item => {
        return (
            <li className="footer__item" key={item.name}>
                <a className="footer__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });

    const help = footerHelp.map(item => {
        return (
            <li className="footer__item" key={item.name}>
                <a onClick={(e) => {
                    e.preventDefault()
                    setPage(item.setPage)
                }} className="footer__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });

    const policy = footerPolicy.map(item => {
        return (
            <li className="footer__item" key={item.name}>
                <a className="footer__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        <footer className="footer">
            <ul className="footer__list">
                <p>About</p>
                {about}
            </ul>
            <ul className="footer__list">
                <p>Help</p>
                {help}
            </ul>
            <ul className="footer__list">
                <p>Policy</p>
                {policy}
            </ul>
        </footer>
    );

}

export default Footer;