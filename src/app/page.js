"use client"
import React, { useEffect } from 'react';
import styles from './page.module.css';
import weapons from './styles/weapons.module.css';
import icons from './styles/icons.module.css';
import Downloader from './components/Downloader';
import KillFeedStyler from './components/KillFeedStyler';
import JsonSaver from './components/JsonSaver';

export default function Home() {
  useEffect(() => {
    const downloader = new Downloader('killFeed', 'downloadBtn');
    const killFeedStyler = new KillFeedStyler('killFeed');

    const killFeedData = [
      { type: 'div', className: `${icons.specialkill} ${icons.blindfolded} ${icons.true}`, text: '' },
      { type: 'link', className: '', linkClassName: styles.TR, href: '', text: 'player 1' },
      { type: 'link', className: '', linkClassName: styles.assist, href: '', text: '+'},
      { type: 'div', className: `${icons.specialkill} ${icons.flash} ${icons.true}`, text: '' },
      { type: 'link', className: '', linkClassName: styles.TR, href: '', text: 'player 1' },
      { type: 'div', className: `${weapons.weapon} ${weapons.awp}`, text: '' },
      { type: 'div', className: `${icons.specialkill} ${icons.noscope} ${icons.true}`, text: '' },
      { type: 'div', className: `${icons.specialkill} ${icons.smoke} ${icons.true}`, text: '' },
      { type: 'div', className: `${icons.specialkill} ${icons.wallbang} ${icons.true}`, text: '' },
      { type: 'div', className: `${icons.specialkill} ${icons.headshot} ${icons.true}`, text: '' },
      { type: 'link', className: '', linkClassName: styles.CT, href: '', text: 'player 2' }
    ];

    killFeedStyler.setKillFeed(killFeedData);  

    const jsonSaver = new JsonSaver(killFeedData, 'saveJsonBtn');

    return () => {
      downloader.destroy();
      jsonSaver.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div id="killFeed" className={styles.killFeedContainer}></div>
      <button id="downloadBtn">Download as PNG</button>
      <button id="saveJsonBtn">Download JSON</button>
    </div>
  );
}