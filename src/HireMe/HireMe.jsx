import styles from './HireMe.module.css';

function HireMe() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'public/resume.docx'; // Path to your resume file in the public directory
        link.download = 'resume.docx'; // Name of the downloaded file
        link.click();
    };

    return (
        <div className={styles.HireMe}>
            <div className={styles.headerButtonGroup}>
                <h1>HIRE ME</h1>
                <button onClick={handleDownload}>View Resume</button>
            </div>
            <p>Let's work together</p>
        </div>
    );
}

export default HireMe;
