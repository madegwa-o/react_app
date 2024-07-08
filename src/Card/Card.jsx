import styles from './Card.module.css'
function Card (props) {

    return (
        <div className={styles.Card}>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
        </div>
    )
}

export default Card;