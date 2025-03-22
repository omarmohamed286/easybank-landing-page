type Props = {
  image: string;
  author: string;
  title: string;
  description: string;
  alt: string;
};

const ArticleCard = ({ image, alt, author, title, description }: Props) => {
  return (
    <article className="text-grayish-blue max-sm:mx-5">
      <img src={image} alt={alt} className="rounded-t-lg max-w-100 aspect-3/2 w-full mx-auto" />
      <div className="mx-12 lg:mx-3 space-y-2">
        <p className="mt-5 text-sm lg:text-xs">{author}</p>
        <a href="#" className="text-dark-blue text-xl lg:text-lg hover:text-lime-green">{title}</a>
        <p className="lg:text-sm">{description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
