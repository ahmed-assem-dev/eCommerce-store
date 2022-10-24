import { useState, useEffect } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/news");
      const fetchedNews = await response.json();
      setNews(fetchedNews);
    })();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly my-5">
      {news.map((newItem) => (
        <div
          key={newItem.key}
          className="flex flex-col p-2 m-2 border-2 border-gray-900 w-[80%] lg:w-[300px] h-[120px] text-center text-white bg-blue-900"
        >
          <h1 className="text-lg font-light flex-1">{newItem.name}</h1>
          <p className=" text-xs font-thin flex-1">{newItem.description}</p>
          <button className="underline hover:no-underline font-light flex-1">
            {newItem.cta}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
