import WhyChooseCard from "./WhyChooseCard";

import { whyChooseCards } from "../constants";

const WhyChoose = () => {
  return (
    <section className="mt-30 lg:-mt-10 text-center lg:text-start mx-5 lg:m-desktop">
      <h2 className="text-dark-blue text-4xl">Why choose Easybank?</h2>
      <p className="text-grayish-blue mt-5 lg:w-[60ch]">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <article className="mt-10 space-y-10 lg:flex lg:gap-15">
        {whyChooseCards.map((card) => (
          <WhyChooseCard key={card.title} {...card} />
        ))}
      </article>
    </section>
  );
};

export default WhyChoose;
