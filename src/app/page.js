"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import KillFeedStyler from './components/KillFeedStyler';
import StyleSelector from './components/StyleSelector';

export default function Home() {

  const handleAddClick = () => {
    const killfeedStyleSelect = document.getElementById('killfeedStyle-select');
    const weapon = document.getElementById('weapon-killer');
    const selectedStyle = killfeedStyleSelect.value;
    const selectedWeapon = weapon.value;

    const killFeedData = {
      game: "CS2",
      colors: selectedStyle,
      events: [
        {
          killerName: "player1",
          side: "CT",
          weapon: selectedWeapon,
          noscope: false,
          wallbang: false,
          smoke: false,
          headshot: false,
          blindfolded: false,
          airkill: false,
          flashassist: false,
          assist: {
            name: "",
            side: "CT"
          }
        },
        {
          victimName: "player1",
          side: "T",
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