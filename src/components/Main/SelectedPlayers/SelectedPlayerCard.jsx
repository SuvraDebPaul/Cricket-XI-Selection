import React from "react";

const SelectedPlayerCard = ({ player, handleRemovePlayer }) => {
  return (
    <div className="flex items-center justify-between my-5 border-1 p-4 rounded-2xl border-gray-200 shadow-sm">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            className="w-[100px] h-[100px] rounded-2xl"
            src={player.imageUrl}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-3xl">{player.name} </h3>
          <p>{player.role}</p>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            handleRemovePlayer(player);
          }}
          className="btn btn-error text-white font-bold"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
