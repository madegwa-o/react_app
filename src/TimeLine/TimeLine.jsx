import React from 'react';
import styles from './TimeLine.module.css';
import TimeLineBlock from './TimelineBlock';

const events = [
  {
    date: 'July 2024',
    title: 'FrontEnd Development',
    description: 'Yeah, i just did some css, js and react.',
    image: '/src/assets/js.svg',
    readMoreLink: 'https://github.com/madegwa-o/react_app.git'
  },
  {
    date: 'June 2024',
    title: 'Containerisation',
    description: 'Server virtualization is about abstracting hardware and running an operating system. Containerization is about abstracting an operating system and running an app. ',
    image: '/src/assets/container.svg',
    readMoreLink: 'https://github.com/madegwa-o/Docker-yeah.git'
  },
  {
    date: 'May 2024',
    title: 'Backend Development',
    description: 'i mainly focused on Java and Spring. you can clone my latest chat app',
    image: '/src/assets/java.png',
    readMoreLink: 'https://github.com/madegwa-o/One2One_chatApp.git'
  }
  // Add more events here
];

function TimeLine() {
  return (
    <div className={styles.TimeLine}>
    
      <h1>My <span>T</span>ime<span>l</span>ine</h1>
      <section className={styles.cdTimeline}>
        <div className={`${styles.container} ${styles.maxWidthLg} ${styles.cdTimelineContainer}`}>
          {events.map((event, index) => (
            <TimeLineBlock key={index} event={event} />
          ))}
        </div>
      </section>
  </div>
  );
}

export default TimeLine;
