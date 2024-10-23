import React from "react";
import "../../styles/styleContainer.css";

const CheckboxContainer = () => {
    return (
        <div className="checkbox-container">
            <div className="checkbox-item">
                <input type="checkbox" id="noscope" className="checkbox" />
                <label className="icon-label">No Scope</label>
            </div>
            <div className="checkbox-item">
                <input type="checkbox" id="wallbang" className="checkbox" />
                <label className="icon-label">Wallbang</label>
            </div>
            <div className="checkbox-item">
                <input type="checkbox" id="smoke" className="checkbox" />
                <label className="icon-label">Smoke</label>
            </div>
            <div className="checkbox-item">
                <input type="checkbox" id="headshot" className="checkbox" />
                <label className="icon-label">Headshot</label>
            </div>
            <div className="checkbox-item">
                <input type="checkbox" id="blindfolded" className="checkbox" />
                <label className="icon-label">Blindfolded</label>
            </div>
            <div className="checkbox-item">
                <input type="checkbox" id="airkill" className="checkbox" />
                <label className="icon-label">Airkill</label>
            </div>
            <div className="checkbox-item">
                <input type="checkbox" id="flashassist" className="checkbox" />
                <label className="icon-label">Flash Assist</label>
            </div>
        </div>
    );
};

export default CheckboxContainer;
