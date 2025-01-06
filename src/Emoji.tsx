import "./Emoji.css";
import { useState } from "react";

const EMOJIS = new Map<string, string>([
  ["happy", "😊"],
  ["dead", "💀"],
  ["programming", "👨‍💻"],
]);
//EMOJIS.set("happy", "😊");

export default function Emoji() {
  const [situation, setSituation] = useState("");

  function toHappy() {
    setSituation("happy");
  }

  function toDead() {
    setSituation("dead");
  }

  function toWork() {
    setSituation("programming");
  }

 function switchStatus() {
    switch (situation) { 
        case "happy":
            setSituation("dead");
            break;
        case "dead":
            setSituation("programming");
            break;
        case "programming":
            setSituation("happy");
            break;
        default:
            setSituation("happy");
            break;
    }
  }

  return (
    <div className="emoji">
      <div className="face">{EMOJIS.get(situation) || "🤡"}</div>
      <div className="actions">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toDead}>Morto</button>
        <button onClick={toWork}>Programando</button>
        <button onClick={switchStatus}>Alternar Situação</button>
      </div>
    </div>
  );
}
