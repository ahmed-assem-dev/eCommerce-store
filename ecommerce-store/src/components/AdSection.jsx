import React from "react";
// { bgImg, title, description, cta }
const AdSection = ({ imgUrl }) => {
  //   let c = `bg-${imgUrl}\]`;

  let bgDiv = `my-5 bg-random-img  w-[1024px] h-[400px]`;
  return (
    <div className={bgDiv}>
      <div className="flex flex-col backdrop-blur-[6px] w-full h-full text-white font-extrabold text-center  font-serif items-center justify-center">
        <h1 className=" my-5 text-8xl  ">New Offers!</h1>

        <p className="my-5 text-2xl font-light w-[60%]">
          new users get 10% discount on all items at check out! Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Commodi, facere?
        </p>
        <button className=" my-2 underline hover:no-underline text-3xl">
          Shop Now!
        </button>
        {imgUrl}
      </div>
    </div>
  );
};

export default AdSection;
