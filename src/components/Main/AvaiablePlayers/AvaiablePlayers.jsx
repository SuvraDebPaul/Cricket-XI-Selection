import React, { use } from "react";
import AvaiablePlayer from "./AvaiablePlayer";

const AvaiablePlayers = ({
  allPlayersPromise,
  avaiableBalance,
  setAvaiableBalance,
}) => {
  const allPlayers = use(allPlayersPromise);
  //   console.log(allPlayers);

  return (
    <div className="w-11/12 mx-auto mt-15">
      <div className="playerContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allPlayers.map((player, index) => (
          <AvaiablePlayer
            key={index}
            player={player}
            setAvaiableBalance={setAvaiableBalance}
            avaiableBalance={avaiableBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default AvaiablePlayers;
