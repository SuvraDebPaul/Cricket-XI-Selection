import React from "react";
import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({
  purchasedPlayer,
  setPurchasedPlayer,
  avaiableBalance,
  setAvaiableBalance,
}) => {
  console.log(purchasedPlayer);
  const handleRemovePlayer = (removedPlayer) => {
    console.log(removedPlayer);
    const filteredPlayers = purchasedPlayer.filter(
      (player) => player.name !== removedPlayer.name
    );
    console.log(filteredPlayers);
    setPurchasedPlayer(filteredPlayers);
    const newBalance =
      parseInt(avaiableBalance) + parseInt(removedPlayer.price);
    setAvaiableBalance(newBalance);
  };

  return (
    <div className="w-11/12 mx-auto">
      {purchasedPlayer.map((player, index) => (
        <SelectedPlayerCard
          key={index}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;
