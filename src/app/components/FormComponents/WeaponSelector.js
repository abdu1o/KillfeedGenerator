import React from "react";
import "../../styles/styleContainer.css";

const weapons = [
    { value: "ak47", label: "AK-47" },
    { value: "aug", label: "AUG" },
    { value: "awp", label: "AWP" },
    { value: "bayonet", label: "Bayonet" },
    { value: "bizon", label: "PP-Bizon" },
    { value: "burned", label: "Burned" },
    { value: "cz75", label: "CZ75-Auto" },
    { value: "deagle", label: "Desert Eagle" },
    { value: "dualBerettas", label: "Dual Berettas" },
    { value: "famas", label: "FAMAS" },
    { value: "fiveSeven", label: "Five-Seven" },
    { value: "flip", label: "Flip" },
    { value: "galil", label: "Galil AR" },
    { value: "g3sg1", label: "G3SG1" },
    { value: "glock", label: "Glock" },
    { value: "gut", label: "Gut" },
    { value: "heGranade", label: "HE Granade" },
    { value: "karambit", label: "Karambit" },
    { value: "knifeCT", label: "Knife CT" },
    { value: "knifeT", label: "Knife T" },
    { value: "m249", label: "M249" },
    { value: "m4a1s", label: "M4A1-S" },
    { value: "m4a4", label: "M4A4" },
    { value: "mac10", label: "Mac-10" },
    { value: "mag7", label: "MAG7" },
    { value: "m9Bayonet", label: "M9 Bayonet" },
    { value: "mp5", label: "MP5" },
    { value: "mp7", label: "MP7" },
    { value: "mp9", label: "MP9" },
    { value: "negev", label: "Negev" },
    { value: "nova", label: "Nova" },
    { value: "p2000", label: "p2000" },
    { value: "p250", label: "P250" },
    { value: "p90", label: "P90" },
    { value: "revolver", label: "R8 Revolver" },
    { value: "scar20", label: "SCAR-20" },
    { value: "sawedOff", label: "Sawed-Off" },
    { value: "sg553", label: "SG 553" },
    { value: "ssg08", label: "SSG 08" },
    { value: "suicide", label: "Suicide" },
    { value: "tec9", label: "Tec-9" },
    { value: "ump45", label: "UMP-45" },
    { value: "usp", label: "USP-S" },
    { value: "xm1014", label: "XM1014" },
    { value: "zeus", label: "Zeus" }
];

const WeaponSelector = () => {
    return (
        <select id="weapon-killer" className="selector">
            {weapons.map(weapon => (
                <option key={weapon.value} value={weapon.value}>
                    {weapon.label}
                </option>
            ))}
        </select>
    );
};

export default WeaponSelector;
