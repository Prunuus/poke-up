import './landing-page.css';

function LandingPage() {

  return (
    <>
      <div className="background-wrapper">

        {/* Static Background Elements */}
        <img src="../../assets/LandingPageBackground.svg" className="background"/>
        <img src="../../assets/LandingPageForeground.svg" className="foreground"/>
        <img src="../../assets/LandingPageBanner.svg" className="banner"/>
        <img src="../../assets/LandingPageFooter.svg" className="footer"/>

        {/* Navigation Elements */}
        <div className="nav-bar">
          <div style={ {display: "flex", gap: "4vw"} }>
            <button className="nav-button">HOME</button>
            <button className="nav-button">ABOUT</button>
          </div>
          <div style={ {display: "flex", gap: "4vw"} }>
            <button className="nav-button">CREDITS</button>
            <button className="nav-button">LOGIN</button>
          </div>
        </div>

        <button className="play-button">
          <img src="../../assets/PlayButton.svg" className="background"/>
        </button>


        {/* Footer Elements */}
        <div className="foot-bar">
          <img src="../../assets/Instagram.svg" className="foot-button"></img>
          <img src="../../assets/Facebook.svg" className="foot-button"></img>
          <img src="../../assets/Youtube.svg" className="foot-button"></img>
        </div>


      </div>
      
    </>

      
    
  )
}

export default LandingPage;