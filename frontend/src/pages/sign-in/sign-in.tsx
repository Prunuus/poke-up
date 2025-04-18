import styles from './sign-in.module.css';

function SignIn() {

  return (
    <>
      <div className={styles.backgroundWrapper}>

        {/* Static Background Elements */}


        {/* <img src="../assets/SignLoginFrame.svg" className ="frame"/> */}
        <img src="../../assets/SignLoginBackground.svg" className={styles.backgroundWrapper}/>
        <img src="../../assets/SignLoginBanner.svg" className={styles.banner}/>

        {/* Navigation Elements */}
        <div className={styles.navBarLogin}>
          <div style={ {display: "flex", gap: "7vw"} }>
            <button className={styles.navButton}>HOME</button>
            <button className={styles.navButton}>ABOUT</button>
          </div>
          <div style={{ display: "flex", gap: "4vw"}}>
            <button className={styles.navButton}>CREDITS</button>
          </div>

          <div className={styles.loginContainer}>
            <div className={styles.welcomeHeader}>Welcome back,</div>
            <div className={styles.welcomeHeader}>Trainer!</div>
            <div className={styles.loginFrame}>
              <input type="text" placeholder="Username" className={styles.inputBox}/>
              <input type="password" placeholder="Password" className={styles.inputBox} />
              <p className={styles.registerText}>Don't have an account? <a href="your-registration-page-url" className={styles.registerLink}>Register here</a></p>
              <button className={styles.signInBtn}>Sign In</button>
            </div>
          </div>



        </div>
        <div>

        </div>


        {/* Footer Elements */}
        <div className={styles.footBar}>
          <img src="../assets/Instagram.svg" className={styles.footButton}></img>
          <img src="../assets/Facebook.svg" className={styles.footButton}></img>
          <img src="../assets/Youtube.svg" className={styles.footButton}></img>
        </div>


        </div>
    
    </>

      
    
  )
}

export default SignIn;