import './sign-up.css';

function SignUp() {

  return (
    <>
      <div className="background-wrapper">

        {/* Static Background Elements */}

        {/* <img src="../assets/SignLoginFrame.svg" className ="frame"/> */}
        <img src="../assets/SignLoginBanner.svg" className="banner"/>

        {/* Navigation Elements */}
        <div className="nav-bar-signup">
          <div style={ {display: "flex", gap: "7vw"} }>
            <button className="nav-button">HOME</button>
            <button className="nav-button">ABOUT</button>
          </div>
          <div style={{ display: "flex", gap: "4vw"}}>
            <button className="nav-button">CREDITS</button>
          </div>
        </div>

        <div className="signup-container">
          <div className="welcome-header">Howdy!,</div>
          <div className="welcome-header">New Trainer!</div>
          <div className="signup-frame">
            <input type="text" placeholder="Username" className="input-box" />
            <input type="email" placeholder="Email" className="input-box" />
            <input type="text" placeholder="Password" className="input-box" />
            <input type="text" placeholder="Confirm Password" className="input-box" />
            
            <p className="register-text">Have an account? <a href="your-registration-page-url" className="login-link">Log In Here</a></p>
            <button className="sign-in-btn">Sign Up</button>
          </div>
        </div>


        {/* Footer Elements */}
        <div className="foot-bar">
          <img src="../assets/Instagram.svg" className="foot-button"></img>
          <img src="../assets/Facebook.svg" className="foot-button"></img>
          <img src="../assets/Youtube.svg" className="foot-button"></img>
        </div>


        </div>

    
    </>

      
    
  )
}

export default SignUp;