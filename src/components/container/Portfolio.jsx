import { portfolios } from "../../data/index";

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <div className="text-center">
        <div className="text-Teal sm:text-3xl text-2xl font-bold mb-14">Portfolio</div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-12 gap-8">
        {portfolios.map((portfolio) => {
          return (
            <div key={portfolio.id} className="p-3 shadow-lg min-w-[15rem] bg-white rounded-lg">
              <img src={portfolio.image} alt={portfolio.image} className="rounded-lg" />
              <div className="mt-4 text-xl font-medium text-Teal">{portfolio.title}</div>
              <div className="my-2 text-sm  text-gray">{portfolio.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
