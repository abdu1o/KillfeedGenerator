import React from "react";
import "../../styles/styleContainer.css";

const PlayerSelector = () => {
    return (
        <>
            <div className="player-container">
                <input type="text" id="killer-name" className="input" placeholder="Killer name" />
                <select id="killer-side" className="sideSelector">
                    <option value="T">T</option>
                    <option value="CT">CT</option>
                </select>
            </div>
            <div className="player-container">
                <input type="text" id="assist-name" className="input" placeholder="Assist name" />
                <select id="assist-side" className="sideSelector">
                    <option value="T">T</option>
                    <option value="CT">CT</option>
                </select>
            </div>
            <div className="player-container">
                <input type="text" id="victim-name" className="input" placeholder="Victim name" />
                <select id="victim-side" className="sideSelector">
                    <option value="T">T</option>
                    <option value="CT">CT</option>
                </select>
            </div>
        </>
    );
};

export default PlayerSelector;
