import styles from './Connect.module.css';

function LetsConnect() {
    const userIcon = '/src/assets/user.svg';
    const emailIcon = '/src/assets/email.svg';
    
    return (
        <div className={styles.LetsConnect}>
            <div className={styles.left}>
                <h1>Contact Me</h1>
                <p>+254 11 522 5391</p>
                <p>madegwaoscar317@gmail.com</p>
            </div>
            <hr />
            <div className={styles.right}>
                <h1>Get in touch</h1>
                <div className={styles.inputs}>
                    <div className={styles.inputWithIcon}>
                        <img src={userIcon} alt="user icon" />
                        <input type="text" placeholder="What's your Name" />
                    </div>
                    <div className={styles.inputWithIcon}>
                        <img src={emailIcon} alt="email icon" />
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div className={styles.textArea}>
                        <textarea name="message" id="text-message" cols="30" rows="7" placeholder="Text Me (This website does not suport messages at the moment)"></textarea>
                    </div>
                </div>
                <div className={styles.btns}>
                    <button>Send</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    );
}

export default LetsConnect;
