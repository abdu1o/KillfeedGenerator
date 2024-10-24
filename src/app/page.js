"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import KillFeedStyler from "./components/KillFeedStyler";
import ImageGenerator from "./components/ImageGenerator";
import StyleForm from "./components/StyleForm";

export default function Home() {
  const handleAddClick = () => {
    const getValue = (id) => document.querySelector(`#${id}`).value;
    const getChecked = (id) => document.querySelector(`#${id}`).checked;

    const ids = [
      "killfeedStyle-select",
      "weapon-killer",
      "killer-name",
      "killer-side",
      "assist-name",
      "assist-side",
      "victim-name",
      "victim-side",
    ];

    const [
      selectedStyle,
      selectedWeapon,
      selectedKillerName,
      selectedKillerSide,
      selectedAssistName,
      selectedAssistSide,
      selectedVictimName,
      selectedVictimSide,
    ] = ids.map(getValue);

    const checkIds = [
      "noscope",
      "wallbang",
      "smoke",
      "headshot",
      "blindfolded",
      "airkill",
      "flashassist",
    ];

    const [
      selectedNoScope,
      selectedWallbang,
      selectedSmoke,
      selectedHeadshot,
      selectedBlindfolded,
      selectedAirkill,
      selectedFlashAssist,
    ] = checkIds.map(getChecked);

    const killFeedData = {
      game: "CS2",
      colors: selectedStyle,
      events: [
        {
          killerName: selectedKillerName,
          side: selectedKillerSide,
          weapon: selectedWeapon,
          noscope: selectedNoScope,
          wallbang: selectedWallbang,
          smoke: selectedSmoke,
          headshot: selectedHeadshot,
          blindfolded: selectedBlindfolded,
          airkill: selectedAirkill,
          flashassist: selectedFlashAssist,
          assist: {
            name: selectedAssistName,
            side: selectedAssistSide,
          },
        },
        {
          victimName: selectedVictimName,
          side: selectedVictimSide,
        },
      ],
    };

    const killFeedStyler = new KillFeedStyler(killFeedData);
    killFeedStyler.setKillFeed();

    //for test
    const testData = {
      width: 200,
      height: 100,
      color: '#242424',
      filename: 'test.png'
  };

  const killfeedData = {
    weapon: '_next/static/media/icon_awp.351ee63b.png'
    //_next/static/media/icon_awp.351ee63b.png
  };

    const imageGenerator = new ImageGenerator(testData, killfeedData);
  };

  return (
    <>
      <div className={styles.container} id="mainContainer">
        <div id="killFeed"></div>
      </div>
      <div>
        <StyleForm handleAddClick={handleAddClick} />
      </div>
    </>
  );
}
