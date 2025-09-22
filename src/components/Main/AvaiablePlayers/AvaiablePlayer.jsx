import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

const AvaiablePlayer = ({ player, setAvaiableBalance, avaiableBalance }) => {
  //   console.log(player);
  const [isSelected, setIsSelected] = useState(true);
  const handelPlayerSelection = (selection) => {
    setIsSelected(!selection);
  };
  const handelsetAvaiableBalance = (playerPrice) => {
    const newBalance = avaiableBalance - playerPrice;
    setAvaiableBalance(newBalance);
  };
  const handelsetAvaiableBalanceAdj = (playerPrice) => {
    const newBalance = avaiableBalance + playerPrice;
    setAvaiableBalance(newBalance);
  };

  return (
    <div className="border-1 border-gray-200 p-4 rounded-xl sora shadow-sm">
      <img
        src={player.imageUrl}
        alt="Photo"
        className="w-full h-[350px] object-cover object-top mb-4 rounded-2xl"
      />
      <div>
        <h3 className="text-2xl font-bold">
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <span className="ml-4">{player.name}</span>
        </h3>
        <div className="flex justify-between items-center my-4">
          <p className="text-gray-500">
            <FontAwesomeIcon icon="fa-solid fa-flag" />{" "}
            <span className="ml-2">{player.country}</span>
          </p>
          <button
            className="btn btn-sm btn-active rounded-xl text-sm bg-gray-100 border-none"
            type="button"
          >
            {player.role}
          </button>
        </div>
        <hr className="text-gray-300" />
        <h4 className="sora font-bold my-4">
          Rating: <span>{player.rating}</span>
        </h4>
        <div className="flex justify-between">
          <div className="font-bold">
            <h4 className="text-sm">
              {player.role === "All-rounder" ||
              player.role === "Batsman" ||
              player.role === "Wicketkeeper-Batsman"
                ? player.battingStyle
                : ""}
            </h4>
            <h4 className="text-sm">
              {player.role === "All-rounder" || player.role === "Bowler"
                ? player.bowlingStyle
                : ""}
            </h4>
          </div>
          <div className="text-gray-500">
            <h4 className="text-sm">
              {player.role === "All-rounder" ||
              player.role === "Batsman" ||
              player.role === "Wicketkeeper-Batsman"
                ? player.battingStyle
                : ""}
            </h4>
            <h4 className="text-sm">
              {player.role === "All-rounder" || player.role === "Bowler"
                ? player.bowlingStyle
                : ""}
            </h4>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="font-bold">
            Price: <span>{player.price}</span>
          </h3>
          <button
            onClick={() => {
              handelPlayerSelection(isSelected);
              {
                isSelected
                  ? handelsetAvaiableBalance(parseInt(player.price))
                  : handelsetAvaiableBalanceAdj(parseInt(player.price));
              }
            }}
            className={`btn btn-sm btn-outline ${
              isSelected ? "" : "btn-active btn-bg text-black"
            }`}
          >
            {isSelected ? "Choose Player" : "Selected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvaiablePlayer;
