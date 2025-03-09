import React, { useState } from "react";
import "../css/Type8Togge.css";

export const ToggleButton = ({ isoff ,children ,backgroundColor, backgroundColor1,backgroundColor2,  val }) => {
    const [isOn, setIsOn] = useState(isoff);

    return (
        <label className="toggle-switch"  >
            <input
                type="checkbox"
                checked={isoff?isOn:!isOn}
                onChange={() => setIsOn(!isOn)}
            />
            <span
                className="slider"
                style={{
                    backgroundColor: backgroundColor1,
                    color:backgroundColor2,
                    justifyContent: isoff ? "flex-start" : "flex-end"
                    
                }}
            >
                {isOn ? val: ""}
                {isOn?children:""}
            </span>
        </label>
    );
};

export const Type8Togge = (props) => {
    return (
        <div className="toggle-box" style={{backgroundColor: props.backgroundColor }}>
            <ToggleButton {...props} />
        </div>
    );
};
