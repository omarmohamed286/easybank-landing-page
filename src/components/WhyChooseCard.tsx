type Props = {
  src: string;
  title: string;
  description: string;
};

const WhyChooseCard = ({ src, title, description }: Props) => {
  return (
    <article className="space-y-5">
      <img src={src} alt={title} className="max-lg:mx-auto" />
      <h3 className="text-dark-blue text-xl">{title}</h3>
      <p className="text-grayish-blue">{description}</p>
    </article>
  );
};

export default WhyChooseCard;
