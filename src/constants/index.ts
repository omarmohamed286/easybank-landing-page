import onlineBanking from "../images/icon-online.svg";
import simpleBudgeting from "../images/icon-budgeting.svg";
import fastOnboarding from "../images/icon-onboarding.svg";
import openApi from "../images/icon-api.svg";

import currencyImage from "../images/image-currency.jpg";
import restaurantImage from "../images/image-restaurant.jpg";
import planeImage from "../images/image-plane.jpg";
import confettiImage from "../images/image-confetti.jpg";

import FacebookIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import InstagramIcon from "../images/icon-instagram.svg";
import YoutubeIcon from "../images/icon-youtube.svg";
import PinterestIcon from "../images/icon-pinterest.svg";

const headerNavLinks = ["Home", "About", "Contact", "Blog", "Careers"];

const footerNavLinks = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const socialMediaIcons = [
  { src: FacebookIcon, alt: "Facebook" },
  { src: TwitterIcon, alt: "Twitter" },
  { src: InstagramIcon, alt: "Instagram" },
  { src: YoutubeIcon, alt: "Youtube" },
  { src: PinterestIcon, alt: "Pinterest" },
];

const whyChooseCards = [
  {
    src: onlineBanking,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    src: simpleBudgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    src: fastOnboarding,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    src: openApi,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const latestArticles = [
  {
    image: currencyImage,
    alt: "Currency",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    image: restaurantImage,
    alt: "Restaurant",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: planeImage,
    alt: "Plane",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      " We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    image: confettiImage,
    alt: "Confetti",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

export {
  whyChooseCards,
  headerNavLinks,
  footerNavLinks,
  latestArticles,
  socialMediaIcons,
};
