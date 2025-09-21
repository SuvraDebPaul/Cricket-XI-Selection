import React, { Suspense } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import AvaiablePlayers from "./components/Main/AvaiablePlayers/AvaiablePlayers";
import SelectedPlayers from "./components/Main/SelectedPlayers/SelectedPlayers";

function App() {
  const allPlayersPromise = fetch("players.json").then((res) => res.json());
  console.log(allPlayersPromise);

  return (
    <>
      <Header></Header>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <AvaiablePlayers
          allPlayersPromise={allPlayersPromise}
        ></AvaiablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
