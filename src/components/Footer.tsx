import { footerNavLinks, socialMediaIcons } from "../constants";
import logo from "../images/footer-logo.svg";

import RequestInviteButton from "./RequestInviteButton";

const Footer = () => {
  return (
    <footer className="text-center lg:text-start mt-20 bg-dark-blue py-10 space-y-8 lg:flex p-desktop">
      <div className="space-y-8 lg:space-y-15 lg:mr-25">
        <img src={logo} alt="Easybank Logo" className="mx-auto" />
        <ul className="flex justify-center gap-5">
          {socialMediaIcons.map((icon) => (
            <li key={icon.alt}>
              <a href="#">
                <img src={icon.src} alt={icon.alt}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <ul className="text-white space-y-2 lg:columns-2 lg:gap-20">
          {footerNavLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-lime-green">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-8 lg:flex lg:flex-col lg:ml-auto">
        <RequestInviteButton classes="lg:ml-auto"></RequestInviteButton>
        <p className="text-grayish-blue lg:text-end">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
