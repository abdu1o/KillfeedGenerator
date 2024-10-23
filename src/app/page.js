"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import KillFeedStyler from './components/KillFeedStyler';
import StyleSelector from './components/StyleSelector';

export default function Home() {

  const handleAddClick = () => {
    const killfeedStyleSelect = document.getElementById('killfeedStyle-select');
    const weapon = document.getElementById('weapon-killer');
    const killerName = document.getElementById('killer-name');
    const killerSide = document.getElementById('killer-side');

    const assistName = document.getElementById('assist-name');
    const assistSide = document.getElementById('assist-side');

    const victimName = document.getElementById('victim-name');
    const victimSide = document.getElementById('victim-side');

    const selectedStyle = killfeedStyleSelect.value;
    const selectedWeapon = weapon.value;

    const selectedKillerName = killerName.value;
    const selectedKillerSide = killerSide.value;

    const selectedAssistName = assistName.value;
    const selectedAssistSide = assistSide.value;

    const selectedVictimName = victimName.value;
    const selectedVictimSide = victimSide.value;

    const killFeedData = {
      game: "CS2",
      colors: selectedStyle,
      events: [
        {
          killerName: selectedKillerName,
          side: selectedKillerSide,
          weapon: selectedWeapon,
          noscope: true,
          wallbang: true,
          smoke: true,
          headshot: true,
          blindfolded: true,
          airkill: true,
          flashassist: true,
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