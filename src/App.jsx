import React, { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/Header/Header";
import AvaiablePlayers from "./components/Main/AvaiablePlayers/AvaiablePlayers";
import SelectedPlayers from "./components/Main/SelectedPlayers/SelectedPlayers";

function App() {
  // JSON Data Fetch From File
  const allPlayersPromise = fetch("players.json").then((res) => res.json());
  // State Declaretions
  const [avaiableBalance, setAvaiableBalance] = useState(10000000);
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const handelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header avaiableBalance={avaiableBalance}></Header>
      <div className="w-11/12 mx-auto flex justify-between items-center sora my-10">
        <h3 className="text-3xl font-bold">
          {`${
            toggle === true
              ? "Available Players"
              : `Selected Players (${purchasedPlayer.length}/6)`
          }`}
        </h3>
        <div className="join">
          <button
            onClick={handelToggle}
            className={`btn join-item rounded-l-xl ${
              toggle === true ? "btn-bg btn-active" : "bg-white"
            }`}
          >
            Avialable
          </button>
          <button
            onClick={handelToggle}
            className={`btn join-item rounded-r-xl ${
              toggle === false ? "btn-bg btn-active" : "bg-white"
            }`}
          >
            Selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AvaiablePlayers
            allPlayersPromise={allPlayersPromise}
            avaiableBalance={avaiableBalance}
            setAvaiableBalance={setAvaiableBalance}
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
          ></AvaiablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
          avaiableBalance={avaiableBalance}
          setAvaiableBalance={setAvaiableBalance}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
