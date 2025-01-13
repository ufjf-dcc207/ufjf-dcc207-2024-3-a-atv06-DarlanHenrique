import Attribute from "./Attribute";
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

//   function toHappy() {
//     setSituation("happy");
//   }

//   function toDead() {
//     setSituation("dead");
//   }

//   function toWork() {
//     setSituation("programming");
//   }

//  function switchStatus() {
//     switch (situation) { 
//         case "happy":
//             setSituation("dead");
//             break;
//         case "dead":
//             setSituation("programming");
//             break;
//         case "programming":
//             setSituation("happy");
//             break;
//         default:
//             setSituation("happy");
//             break;
//     }
//   }

  function onAlimentar() {

  }

  function OnHidratar() {

  }

  function onLigaDesligaLuz() {

  }

  function onCiclo() {

  }

  return (
    <div className="emoji">
      <div className="face">{EMOJIS.get(situation) || "🤡"}</div>
      <div className="attributes">
        <Attribute icon="💗" value={3} />
        <Attribute icon="⚡" value={3} />
        <Attribute icon="💧" value={3} />
        <Attribute icon="🍖" value={3} />
      </div>
      <div className="actions">
        <button onClick={onAlimentar}>Alimentar</button>
        <button onClick={OnHidratar}>Hidratar</button>
        <button onClick={onLigaDesligaLuz}>Ligar/Desligar Luz</button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}
