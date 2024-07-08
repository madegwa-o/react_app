import React from 'react';
import styles from './TimeLine.module.css';

function TimeLineBlock({ event }) {
  return (
    <div className={styles.cdTimelineBlock}>
      <div className={`${styles.cdTimelineImg} ${styles.cdTimelineImgPicture}`}>
        <img src={event.image} alt="Timeline event" />
      </div>
      <div className={`${styles.cdTimelineContent} ${styles.textComponent}`}>
        <h2>{event.title}</h2>
        <p className="color-contrast-medium">{event.description}</p>
        <div className="flex justify-between items-center">
          <span className={styles.cdTimelineDate}>{event.date}</span>
          <a href={event.readMoreLink} className="btn btn--subtle"> it's in github</a>
        </div>
      </div>
    </div>
  );
}

export default TimeLineBlock;
