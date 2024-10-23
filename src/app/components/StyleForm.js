import React from "react";
import WeaponSelector from './FormComponents/WeaponSelector.js';
import PlayerSelector from './FormComponents/PlayerSelector.js';
import CheckboxContainer from './FormComponents/CheckboxContainer.js';
import "../styles/styleContainer.css";

const StyleForm = ({ handleAddClick }) => {
    return (
        <form className="formStyle">
            <select id="killfeedStyle-select" className="selector">
                <option value="default">Default</option>
                <option value="ESL">ESL</option>
                <option value="BLAST">BLAST</option>
            </select>
            
            <WeaponSelector/>
            <PlayerSelector/>
            <CheckboxContainer/>

            <button
                id="addKillfeed"
                className="button"
                type="button"
                onClick={handleAddClick}
            >
                Add
            </button>
        </form>
    );
};

export default StyleForm;
