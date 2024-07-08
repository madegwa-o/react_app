import React from 'react';
import styles from './NavBar.module.css';
import userIcon from '/src/assets/user.svg';
import timeIcon from '/src/assets/time.svg';
import projectIcon from '/src/assets/project.svg';
import skillIcon from '/src/assets/skill.svg';
import resumeIcon from '/src/assets/resume.svg';
import connectIcon from '/src/assets/connect.svg';

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <a href="#about" className={styles.NavLink}>
        <img src={userIcon} alt="About Me" />
        <span>About Me</span>
      </a>
      <a href="#skills" className={styles.NavLink}>
        <img src={skillIcon} alt="Skills" />
        <span>Skills</span>
      </a>
      
      <a href="#projects" className={styles.NavLink}>
        <img src={projectIcon} alt="Projects" />
        <span>Projects</span>
      </a>
      <a href="#timeline" className={styles.NavLink}>
        <img src={timeIcon} alt="Timeline" />
        <span>Timeline</span>
      </a>
      <a href="#resume" className={styles.NavLink}>
        <img src={resumeIcon} alt="Resume" />
        <span>Resume</span>
      </a>
      <a href="#connect" className={styles.NavLink}>
        <img src={connectIcon} alt="Let's Connect" />
        <span>Let's Connect</span>
      </a>
    </nav>
  );
}

export default NavBar;
