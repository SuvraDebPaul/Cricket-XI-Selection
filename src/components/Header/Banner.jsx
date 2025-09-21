import React from "react";
import HeaderBg from "../../assets/images/bg-shadow.png";
import BannerImg from "../../assets/images/banner-main.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${HeaderBg})` }}
        className="bg-black bg-cover bg-center h-[75vh] flex flex-col text-white items-center justify-center mt-2 rounded-3xl"
      >
        <img src={BannerImg} alt="" />
        <h2 className="text-4xl font-bold mt-10">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="my-4 text-2xl text-gray-300">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn bg-yellow-300 border-0 mt-4 text-black hover:bg-yellow-400 rounded-2xl">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
