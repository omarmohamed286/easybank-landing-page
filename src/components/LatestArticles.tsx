import ArticleCard from "./ArticleCard";

import { latestArticles } from "../constants";
const LatestArticles = () => {
  return (
    <section className="mt-20 m-desktop">
      <h2 className="text-center lg:text-start text-3xl text-dark-blue">Latest Articles</h2>
      <article className="mt-10 space-y-15 lg:flex lg:gap-5">
        {latestArticles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </article>
    </section>
  );
};

export default LatestArticles;
