import NavMenuItem from '../NavMenuItem/NavMenuItem';
import './Nav.css'

export default function Nav(props) {
    return(
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                <NavMenuItem href="/#" text="Home" submenu={[{ href: "/#", text: "Flanders Facts" },{ href: "/#", text: "Favourite Drinks at Mo's" }]} />
                    <i className="fa fa-search"></i>            
                </ul>
            </div>
        </nav>
    );
}