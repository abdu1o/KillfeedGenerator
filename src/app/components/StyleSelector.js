import React from "react";
import "../styles/styleContainer.css";

const StyleSelector = ({ handleAddClick }) => {
    return (
        <form className="formStyle">
            <select id="killfeedStyle-select" className="selector">
                <option value="default">Default</option>
                <option value="ESL">ESL</option>
                <option value="BLAST">BLAST</option>
            </select>
            
            <select id="weapon-killer" className="selector">
                <option value="famas">FAMAS</option>
                <option value="galil">Galil AR</option>
                <option value="ak47">AK-47</option>
                <option value="m4a4">M4A4</option>
                <option value="m4a1s">M4A1-S</option>
                <option value="ssg08">SSG 08</option>
                <option value="aug">AUG</option>
                <option value="sg553">SG 553</option>
                <option value="awp">AWP</option>
                <option value="scar20">SCAR-20</option>
                <option value="g3sg1">G3SG1</option>
                <option value="mac10">Mac-10</option>
                <option value="mp9">MP9</option>
                <option value="mp7">MP7</option>
                <option value="mp5">MP5</option>
                <option value="ump45">UMP-45</option>
                <option value="p90">P90</option>
                <option value="bizon">PP-Bizon</option>
                <option value="usp">USP-S</option>
                <option value="glock">Glock</option>
                <option value="p2000">p2000</option>
                <option value="dualBerettas">Dual Berettas</option>
                <option value="p250">P250</option>
                <option value="cz75">CZ75-Auto</option>
                <option value="fiveSeven">Five-Seven</option>
                <option value="tec9">Tec-9</option>
                <option value="deagle">Desert Eagle</option>
                <option value="revolver">R8 Revolver</option>
                <option value="nova">Nova</option>
                <option value="xm1014">XM1014</option>
                <option value="mag7">MAG7</option>
                <option value="sawedOff">Sawed-Off</option>
                <option value="m249">M249</option>
                <option value="negev">Negev</option>
                <option value="heGranade">HE Granade</option>
                <option value="bayonet">Bayonet</option>
                <option value="flip">Flip</option>
                <option value="gut">Gut</option>
                <option value="karambit">Karambit</option>
                <option value="m9Bayonet">M9 Bayonet</option>
                <option value="knifeT">Knife T</option>
                <option value="knifeCT">Knife CT</option>
                <option value="suicide">Suicide</option>
                <option value="burned">Burned</option>
                <option value="zeus">Zeus</option>
            </select>

            <input type="text" id="killerField" className="input" placeholder="Killer name" />
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

export default StyleSelector;
