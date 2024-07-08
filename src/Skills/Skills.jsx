import styles from './Skills.module.css'
import List from '../Lists/List';
function Skills () {

    const frontend = ['HTML', 'CSS', 'Javascript', 'React'];
    const backend = ['SpringBoot','Java','Postgres', 'MySQL', 'MongoDB'];
    const devops = ['Docker', 'Kubernetes', 'AWS'];
    const database = ['SQL', 'NoSQL'];

    return (
        <div className={styles.Skills}>
            <h1>My Skills</h1>
            <div className={styles.Lists}>
                <List className={styles.List} items={frontend} category="Frontend"/>
                <List className={styles.List} items={backend} category="Backend"/>
                <List className={styles.List} items={devops} category="DevOps"/>
                <List className={styles.List} items={database} category="Database"/>
              
               
            </div>
        </div>
    )
}


export default Skills;