// import { useState } from "react";
import "./Attribute.css"

type AttributeProps = {
    icon: string;
    value: number;
}

export default function Attribute({icon, value}: AttributeProps) {
    // const [value, setValue] = useState(0);

    // function onValueUp () {
    //     setValue((v) => (v == 5 ? 0 : v + 1));

    //     setValue((prevValue) => {
    //         if (prevValue == 5)
    //             return 0;
    //         else
    //             return prevValue + 1
    //     })
    // }

    return (
        <div className="attribute">
            <div className="active">{icon.repeat(value)}</div>
            <div className="inactive">{icon.repeat(5-value)}</div>
            {/* <button onClick={onValueUp}>+</button> */}
        </div>
    );
}