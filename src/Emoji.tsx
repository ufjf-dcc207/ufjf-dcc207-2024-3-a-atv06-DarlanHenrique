import "./Emoji.css";
import { useState } from "react";

const EMOJIS = new Map<string, string>(
    [
        ["happy", "😊"],
        ["dead", "💀"],
        ["programming", "👨‍💻"],
    ],
);
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

  return (
    <div className="emoji">
        <div className="face">{EMOJIS.get(situation) || "🤡"}</div>
        <div className="actions">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toDead}>Morto</button>
        <button onClick={toWork}>Trabalhando</button>
        </div>
    </div>
)
}

