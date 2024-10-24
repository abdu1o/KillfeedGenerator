"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import KillFeedStyler from './components/KillFeedStyler';
import StyleForm from './components/StyleForm';

export default function Home() {

  const handleAddClick = () => {
    const getValue = (id) => document.getElementById(id).value;
    const getChecked = (id) => document.getElementById(id).checked;

    const ids = [
      'killfeedStyle-select', 'weapon-killer', 'killer-name', 'killer-side',
      'assist-name', 'assist-side', 'victim-name', 'victim-side'
    ];

    const [
      selectedStyle, selectedWeapon, selectedKillerName, selectedKillerSide,
      selectedAssistName, selectedAssistSide, selectedVictimName, selectedVictimSide
    ] = ids.map(getValue);

    const checkIds = [
      'noscope', 'wallbang', 'smoke', 'headshot', 'blindfolded', 'airkill', 'flashassist'
    ];

    const [
      selectedNoScope, selectedWallbang, selectedSmoke, selectedHeadshot,
      selectedBlindfolded, selectedAirkill, selectedFlashAssist
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
            side: selectedAssistSide
          }
        },
        {
          victimName: selectedVictimName,
          side: selectedVictimSide,
        }
      ]
    };
    
    const killFeedStyler = new KillFeedStyler(killFeedData);
    killFeedStyler.setKillFeed();
  };

  return (
    <>
      <div className={styles.container} id='mainContainer'>
        <div id="killFeed"></div>
      </div>
      <div>
        <StyleForm handleAddClick={handleAddClick} />
      </div>
    </>
  );
}