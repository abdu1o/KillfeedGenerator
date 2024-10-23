"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import KillFeedStyler from './components/KillFeedStyler';
import StyleSelector from './components/StyleSelector';

export default function Home() {

  const handleAddClick = () => {
    const selectedStyle = document.getElementById('killfeedStyle-select').value;
    const selectedWeapon = document.getElementById('weapon-killer').value;

    const selectedKillerName = document.getElementById('killer-name').value;
    const selectedKillerSide = document.getElementById('killer-side').value;

    const selectedAssistName = document.getElementById('assist-name').value;
    const selectedAssistSide = document.getElementById('assist-side').value;

    const selectedVictimName = document.getElementById('victim-name').value;
    const selectedVictimSide = document.getElementById('victim-side').value;
    
    const selectedNoScope = document.getElementById('noscope').checked ? true : false;
    const selectedWallbang = document.getElementById('wallbang').checked ? true : false;
    const selectedSmoke = document.getElementById('smoke').checked ? true : false;
    const selectedHeadshot = document.getElementById('headshot').checked ? true : false;
    const selectedBlindfolded = document.getElementById('blindfolded').checked ? true : false;
    const selectedAirkill = document.getElementById('airkill').checked ? true : false;
    const selectedFlashAssist = document.getElementById('flashassist').checked ? true : false;

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
    <div className={styles.container}>
      <div id="killFeed" className={styles.killFeedContainerESL}></div>
      <div>
        <StyleSelector handleAddClick={handleAddClick} />
      </div>
    </div>
  );
}