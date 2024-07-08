import styles from './MyProfile.module.css'
function MyProfile () {

    const imageUrl = '/src/assets/profile.png';

    return (
        <div className={styles.MyProfile}>
            <h1>Hey, i'm <span>Oscar</span></h1>
            <h1>A Full-Stack Engineer</h1>
            <div>
               <a href="https://www.linkedin.com/in/oscar-madegwa-528986289" target="_blank"> <button>linked in</button></a>
               <a href="https://github.com/madegwa-o/" target='_blank'> <button>github</button></a>
               <a href="mailto:madegwaoscar327@gmail.com" target='_blank'> <button>Email</button></a>
            </div>
            <p>Hello, I'm Oscar. I'm a DEV-OPS Engineer based in Nakuru City, Kenya. I am pursuing a Bachelors of Science in Computer Science from the University of Karatina. I'm passionate about creating high-quality, user-friendly software that solves real-world problems.

            </p>
            <hr />
        </div>
    )
}   

export default MyProfile;