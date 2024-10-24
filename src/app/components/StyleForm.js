import React from "react";
import WeaponSelector from "./FormComponents/WeaponSelector.js";
import PlayerSelector from "./FormComponents/PlayerSelector.js";
import CheckboxContainer from "./FormComponents/CheckboxContainer.js";
import "../styles/styleContainer.css";

const StyleForm = ({ handleAddClick }) => {
    return (
        <div className="mainContainer">
            <form className="formStyle">
                <div className="selectorContainer">
                    <select id="killfeedStyle-select" className="selector">
                        <option value="default">Default</option>
                        <option value="ESL">ESL</option>
                        <option value="BLAST">BLAST</option>
                    </select>
                    <WeaponSelector />
                </div>

                <PlayerSelector />
                <CheckboxContainer />

                <button
                id="addKillfeed"
                className="button"
                type="button"
                onClick={handleAddClick}
                >
                Add
                </button>
            </form>
        </div>
    );
};

export default StyleForm;
