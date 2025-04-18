import styles from './sign-up.module.css';

function SignUp() {

  return (
    <>
      <div className={styles.backgroundWrapper}>

        {/* Static Background Elements */}

        {/* <img src="../assets/SignLoginFrame.svg" className ="frame"/> */}
        <img src="../assets/SignLoginBanner.svg" className={styles.banner}/>

        {/* Navigation Elements */}
        <div className={styles.navBarSignup}>
          <div style={ {display: "flex", gap: "7vw"} }>
            <button className={styles.navButton}>HOME</button>
            <button className={styles.navButton}>ABOUT</button>
          </div>
          <div style={{ display: "flex", gap: "4vw"}}>
            <button className={styles.navButton}>CREDITS</button>
          </div>
        </div>

        <div className={styles.signupContainer}>
          <div className={styles.welcomeHeader}>Howdy!,</div>
          <div className={styles.welcomeHeader}>New Trainer!</div>
          <div className={styles.signupFrame}>
            <input type="text" placeholder="Username" className={styles.inputBox} />
            <input type="email" placeholder="Email" className={styles.inputBox} />
            <input type="text" placeholder="Password" className={styles.inputBox} />
            <input type="text" placeholder="Confirm Password" className={styles.inputBox} />
            
            <p className={styles.registerText}>Have an account? <a href="your-registration-page-url" className={styles.loginLink}>Log In Here</a></p>
            <button className={styles.signUpBtn}>Sign Up</button>
          </div>
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

export default SignUp;