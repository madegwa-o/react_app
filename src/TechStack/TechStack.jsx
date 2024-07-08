import styles from './Tech.module.css'
import Card from '../Card/Card';

function TechStack () {

    return (
        <div className={styles.Stack}>
            <h1>My <span>T</span>ech <span>S</span>tack</h1>
            <div className={styles.tools}>
               <Card image="/src/assets/docker.svg" title="Docker"/>
               <Card image="/src/assets/kubernetes.svg" title="Kubernetes"/>
               <Card image="/src/assets/spring-boot.svg" title="SpringBoot"/>
               <Card image="/src/assets/cloud.svg" title="Cloud"/>
               <Card image="/src/assets/react.svg" title="React js"/>
               <Card image="/src/assets/postman.svg" title="PostMan"/>
            </div>
            <hr />
        </div>
    )
}

export default TechStack;