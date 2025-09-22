import React, { Suspense, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import AvaiablePlayers from "./components/Main/AvaiablePlayers/AvaiablePlayers";
import SelectedPlayers from "./components/Main/SelectedPlayers/SelectedPlayers";

function App() {
  const allPlayersPromise = fetch("players.json").then((res) => res.json());
  // console.log(allPlayersPromise);
  const [avaiableBalance, setAvaiableBalance] = useState(6000000);
  const [toggle, setToggle] = useState(true);
  const handelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header avaiableBalance={avaiableBalance}></Header>
      <div className="w-11/12 mx-auto flex justify-between items-center sora mt-10">
        <h3 className="text-3xl font-bold">Available Players</h3>
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
            Selected <span>(0)</span>
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
          ></AvaiablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
