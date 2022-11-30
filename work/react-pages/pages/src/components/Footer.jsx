import {footerMenu} from "../data/menu";
import '../css/Footer.css'

function Footer() {


    {/* <ul class="footer__menu">
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="careers.html">Work for us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="social.html">Social Media</a></li>
            </ul> */}
    const list = footerMenu.map(item => {
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
            {/* <nav className={`global-nav ${className}`}> */}
            <ul className="footer__list">
                {list}
            </ul>
        </footer>
    );

}

export default Footer;