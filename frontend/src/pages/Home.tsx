import Brand from '../components/Brand'
import bananaMascot from '../assets/images/banana-mascot.png'
import '../styles/home.css'

type HomeProps = {
  onPlay: () => void
  onLogout: () => void
  playerName?: string
}

function Home({ onPlay, onLogout, playerName = 'Player' }: HomeProps) {
  return (
    <main className="home-page">
      <section className="home-branding">
        <Brand size="large" />
        <p className="home-branding__tagline">
          Think Smart. <span>Go Bananas!</span>
        </p>
      </section>

      <section className="home-menu" aria-label="Game menu">
        <div className="home-menu__profile">
          <div className="profile-icon" aria-hidden="true">♙</div>
          <div>
            <h2>Hi {playerName}!</h2>
            <p>Ready to go bananas?</p>
          </div>
        </div>

        <div className="menu-grid">
          <button type="button" className="menu-button">
            <span className="menu-button__icon" aria-hidden="true">🏆</span>
            <span className="menu-button__label">Leaderboard</span>
          </button>
          <button type="button" className="menu-button">
            <span className="menu-button__icon" aria-hidden="true">❓</span>
            <span className="menu-button__label">How to play</span>
          </button>
          <button type="button" className="menu-button">
            <span className="menu-button__icon" aria-hidden="true">⚙️</span>
            <span className="menu-button__label">Settings</span>
          </button>
          <button type="button" className="menu-button" onClick={onLogout}>
            <span className="menu-button__icon" aria-hidden="true">🚪</span>
            <span className="menu-button__label">Log out</span>
          </button>
        </div>

        <div className="play-button-wrapper">
          <img
            src={bananaMascot}
            alt=""
            aria-hidden="true"
            className="play-button__mascot"
          />
          <button type="button" className="play-button" onClick={onPlay}>
            Let&apos;s play!
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home