import "./Emoji.css";
import { useState } from "react";

const EMOJIS = new Map<string, string>(
    [
        ["happy", "😊"],
        ["sad", "😢"],
        ["angry", "😡"],
        ["sick", "🤢"],
        ["dead", "💀"],
        ["programming", "👨‍💻"],
    ],
);
//EMOJIS.set("happy", "😊");

export default function Emoji() { 
  let [situation, setSituation] = useState("any");

  function toHappy() {
    setSituation("happy");    
  }

  function toDead() {
    setSituation("dead");    
  }

  return (
    <div className="emoji">
        <div className="face">{EMOJIS.get(situation) || "🤡"}</div>
        <div className="actions">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toDead}>Morto</button>
        </div>
    </div>
)
}

