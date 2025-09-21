import React, { use } from "react";
import AvaiablePlayer from "./AvaiablePlayer";

const AvaiablePlayers = ({ allPlayersPromise }) => {
  const allPlayers = use(allPlayersPromise);
  //   console.log(allPlayers);

  return (
    <div className="w-11/12 mx-auto mt-15">
      <div className="flex justify-between items-center sora mb-5">
        <h3 className="text-3xl font-bold">Available Players</h3>
        <div className="join">
          <button className="btn btn-active btn-bg join-item rounded-l-xl">
            Avialable
          </button>
          <button className="btn bg-white join-item rounded-r-xl">
            Selected <span>(0)</span>{" "}
          </button>
        </div>
      </div>
      <div className="playerContainer grid grid-cols-3 gap-4">
        {allPlayers.map((player, index) => (
          <AvaiablePlayer key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default AvaiablePlayers;
