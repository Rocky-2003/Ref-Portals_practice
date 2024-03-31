import { useRef, useState } from "react";

export default function Player() {
  const [inputPlayerName, setInputPlayerName] = useState("unknown Entity");
  const playerName = useRef();

  function handleClick() {
    if (playerName.current.value === "") return;
    setInputPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {inputPlayerName}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
