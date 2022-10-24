import AdSection from "../components/AdSection";
import NewsSection from "../components/NewsSection";

const HomePage = () => {
  const imgR = "https://picsum.photos/1024/400";
  return (
    <div className="flex flex-col items-center">
      <NewsSection />
      <AdSection imgUrl="random-img" />
    </div>
  );
};

export default HomePage;
