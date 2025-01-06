import "./Emoji.css";

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
  let situation = "dead";
  return  <div className="emoji">{EMOJIS.get(situation) || "🤡"}</div>
}