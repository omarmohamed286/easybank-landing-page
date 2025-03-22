import RequestInviteButton from "./RequestInviteButton";
import { headerNavLinks } from "../constants";

type Props = {
  isHamburgerClicked: boolean;
};

const Hero = ({ isHamburgerClicked }: Props) => {
  return (
    <section className="flow-root lg:flex lg:flex-row-reverse lg:items-center">
      <nav className="bg-white absolute z-10 left-5 right-5 top-20 rounded-lg text-center md:hidden">
        {isHamburgerClicked ? (
          <ul className="space-y-5 first:pt-10 last:pb-10 shadow-nav text-dark-blue">
            {headerNavLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
      <div className="bg-overlay-mobile lg:bg-overlay-desktop bg-no-repeat bg-cover bg-[0px_60px] lg:bg-[-50px]">
        <img
          src="src/images/image-mockups.png"
          alt="Mockups"
          className="-mt-20 md:-mt-80 lg:mt-0 max-w-200 lg:max-w-180 lg:-mr-25 w-full mx-auto"
        />
      </div>
      <div className="mt-5 space-y-5 text-center lg:text-start lg:basis-[30%] lg:mr-auto m-desktop">
        <h2 className="text-4xl text-dark-blue lg:text-5xl">
          Next generation digital banking
        </h2>
        <p className="text-grayish-blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestInviteButton></RequestInviteButton>
      </div>
    </section>
  );
};

export default Hero;
