"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import KillFeedStyler from './components/KillFeedStyler';
import JsonSaver from './components/JsonSaver';

export default function Home() {
  useEffect(() => {

    const killFeedData = {
      game: "CS2",
      colors: "default",
      events: [
        {
          killerName: "player1",
          side: "CT",
          weapon: "nova",
          noscope: true,
          wallbang: true,
          smoke: true,
          headshot: true,
          blindfolded: true,
          airkill: true,
          flashassist: true,
          assist: {
            name: "asd",
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

    const jsonSaver = new JsonSaver(killFeedData, 'saveJsonBtn');
  }, []);

  return (
    <div className={styles.container}>
      <div id="killFeed" className={styles.killFeedContainerESL}></div>
      <button id="saveJsonBtn">Download JSON</button>
    </div>
  );
}