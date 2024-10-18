"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import KillFeedStyler from './components/KillFeedStyler';
import JsonSaver from './components/JsonSaver';

export default function Home() {
  useEffect(() => {

    const killFeedData = {
      game: "CS2",
      colors: "BLAST",
      events: [
        {
          killerName: "player1",
          side: "CT",
          weapon: "famas",
          noscope: true,
          wallbang: true,
          smoke: true,
          headshot: true,
          blindfolded: true,
          airkill: true,
          flashassist: true,
          assist: {
            name: "player2",
            side: "CT"         
          }
        },
        {
          victimName: "player3",
          side: "T",
        }
      ]
    };
    
    const killFeedStyler = new KillFeedStyler(killFeedData);
    killFeedStyler.setKillFeed();

    const jsonSaver = new JsonSaver(killFeedData, 'saveJsonBtn');
  }, []);

  return (
    <div className={styles.container}>
      <div id="killFeed" className={styles.killFeedContainerESL}></div>
      <button id="saveJsonBtn">Download JSON</button>
    </div>
  );
}