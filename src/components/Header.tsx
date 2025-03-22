import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

import { headerNavLinks } from "../constants";

import RequestInviteButton from "./RequestInviteButton";

type Props = {
  isHamburgerClicked: boolean;
  handleIsHamburgerClicked: () => void;
};

const Header = ({ handleIsHamburgerClicked, isHamburgerClicked }: Props) => {
  return (
    <header className="flex justify-between items-center py-5 max-lg:px-5 p-desktop bg-white absolute z-10 w-full">
      <img src={logo} alt="Easybank Logo" />
      <nav>
        <ul className="flex gap-5 text-grayish-blue max-md:hidden">
          {headerNavLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <RequestInviteButton classes="max-md:hidden"></RequestInviteButton>
      <button
        onClick={handleIsHamburgerClicked}
        className="cursor-pointer md:hidden"
      >
        {isHamburgerClicked ? (
          <img src={close} alt="Close Icon" />
        ) : (
          <img src={hamburger} alt="Hamburger Icon" />
        )}
      </button>
    </header>
  );
};

export default Header;
