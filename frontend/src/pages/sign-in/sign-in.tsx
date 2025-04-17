import './sign-in.css';

function SignIn() {

  return (
    <>
      <div className="sign-in-background-wrapper">

        {/* Static Background Elements */}


        {/* <img src="../assets/SignLoginFrame.svg" className ="frame"/> */}
        <img src="../../assets/SignLoginBackground.svg" className="background"/>
        <img src="../../assets/SignLoginBanner.svg" className="banner"/>

        {/* Navigation Elements */}
        <div className="nav-bar-login">
          <div style={ {display: "flex", gap: "7vw"} }>
            <button className="nav-button">HOME</button>
            <button className="nav-button">ABOUT</button>
          </div>
          <div style={{ display: "flex", gap: "4vw"}}>
            <button className="nav-button">CREDITS</button>
          </div>

          <div className="login-container">
            <div className="welcome-header">Welcome back,</div>
            <div className="welcome-header">Trainer!</div>
            <div className="login-frame">
              <input type="text" placeholder="Username" className="input-box" />
              <input type="password" placeholder="Password" className="input-box" />
              <p className="register-text">Don't have an account? <a href="your-registration-page-url" className="register-link">Register here</a></p>
              <button className="sign-in-btn">Sign In</button>
            </div>
          </div>



        </div>
        <div>

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

export default SignIn;