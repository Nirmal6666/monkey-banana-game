import monkeyMascot from '../assets/images/monkey-mascot.png'
import bananaMascot from '../assets/images/banana-mascot.png'
import '../styles/home.css'

function Home() {
  return (
    <main className="home-page">

      {/* Left branding section */}
      <section className="home-branding">

        <div className="home-branding__logo">
          <img src={monkeyMascot} alt="Banana Buddy monkey" />

          <h1>
            Banana
            <br />
            Buddy
          </h1>
        </div>

        <p className="home-branding__tagline">
          Think Smart. Go Bananas!
        </p>

      </section>

      {/* Right game menu */}
      <section className="home-menu">

        <div className="home-menu__profile">
          <div className="profile-icon">♙</div>
          <h2>Hi sachintha!</h2>
        </div>

        <div className="home-menu__content">

          <button className="menu-button">
            Leaderboard
          </button>

          <button className="menu-button">
            How to play
          </button>

          <button className="menu-button">
            Settings
          </button>

          <div className="play-button-wrapper">
            <button className="play-button">
              Let's play!
            </button>

            <img
              src={bananaMascot}
              alt="Happy banana mascot"
              className="play-button__mascot"
            />
          </div>

        </div>

        <p className="home-menu__tagline">
          Think Smart. Go Bananas!
        </p>

      </section>

    </main>
  )
}

export default Home