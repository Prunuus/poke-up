import styles from './landing-page.module.css';

function LandingPage() {

  return (
    <>
      <div className={styles.backgroundWrapper}>

        {/* Static Background Elements */}
        <img src="../../../assets/LandingPageBackground.svg" className={styles.background}/>
        <img src="../../../assets/LandingPageBanner.svg" className={styles.banner}/>
        <img src="../../../assets/LandingPageFooter.svg" className={styles.footer}/>
        <img src="../../../assets/LandingPageForeground.svg" className={styles.foreground}/>


        {/* Navigation Elements */}
        <div className={styles.navBar}>
          <div style={ {display: "flex", gap: "4vw"} }>
            <button className={styles.navButton}>HOME</button>
            <button className={styles.navButton}>ABOUT</button>
          </div>
          <div style={ {display: "flex", gap: "4vw"} }>
            <button className={styles.navButton}>CREDITS</button>
            <button className={styles.navButton}>LOGIN</button>
          </div>
        </div>

        <button className={styles.playButton}>
          <img src="../../assets/PlayButton.svg" className={styles.background}/>
        </button>


        {/* Footer Elements */}
        <div className={styles.footBar}>
          <img src="../../assets/Instagram.svg" className={styles.footButton}></img>
          <img src="../../assets/Facebook.svg" className={styles.footButton}></img>
          <img src="../../assets/Youtube.svg" className={styles.footButton}></img>
        </div>


      </div>

    </>



  )
}

export default LandingPage;