import { useState } from "react";

import { Header, Hero, WhyChoose, LatestArticles, Footer } from "./components";

const App = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleIsHamburgerClicked = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  return (
    <div>
      <Header
        isHamburgerClicked={isHamburgerClicked}
        handleIsHamburgerClicked={handleIsHamburgerClicked}
      ></Header>
      <main>
        <Hero isHamburgerClicked={isHamburgerClicked}></Hero>
        <WhyChoose></WhyChoose>
        <LatestArticles></LatestArticles>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
