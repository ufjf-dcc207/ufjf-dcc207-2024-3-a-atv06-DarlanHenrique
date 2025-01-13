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
  const [food, setFood] = useState(3);
  const [water, setWater] = useState(3);
  const [health, setHealth] = useState(3);
  const [energy, setEnergy] = useState(3);

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

  function onFood() {
    setFood(Math.min(food + 1, 5));
  }

  function onWater() {
    setWater(Math.min(water + 1, 5));
  }

  function onEnergy() {
    setEnergy(Math.min(energy + 1, 5));
  }

  function onCiclo() {
    setFood(Math.max(0, food - 1));
    setWater(Math.max(0, water - 1));
    setEnergy(Math.max(0, energy - 1));

    if (food === 0) setHealth((prevHealth) => Math.max(0, prevHealth - 1));
    if (water === 0) setHealth((prevHealth) => Math.max(0, prevHealth - 1));
    if (energy === 0) setHealth((prevHealth) => Math.max(0, prevHealth - 1));
  }

  return (
    <div className="emoji">
      <div className="face">{EMOJIS.get(situation) || "🤡"}</div>
      <div className="attributes">
        <Attribute icon="💗" value={health} />
        <Attribute icon="⚡" value={energy} />
        <Attribute icon="💧" value={water} />
        <Attribute icon="🍖" value={food} />
      </div>
      <div className="actions">
        <button onClick={onFood}>Alimentar</button>
        <button onClick={onWater}>Hidratar</button>
        <button onClick={onEnergy}>Ligar/Desligar Luz</button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}
