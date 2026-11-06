
import jumpingMonkey from '../assets/images/jumping-monkey.png'
import bananaDecoration from '../assets/images/banana-decoration.png'
import monkeyFace from '../assets/images/monkey-face.png'

import '../styles/gameplay.css'

function Gameplay() {
  return (
    <main className="gameplay-page">

      {/* Left: Player Section */}
      <section className="gameplay-player">

        <div className="player-avatar">♙</div>

        <p className="player-name">Sachintha</p>

        <img
          src={jumpingMonkey}
          alt="Monkey jumping towards a banana"
          className="jumping-monkey"
        />

      </section>

      {/* Middle: Progress Section */}
      <section className="gameplay-progress">

        <img
          src={bananaDecoration}
          alt="Banana"
          className="progress-banana"
        />

        <div className="progress-line">
          <div className="progress-marker">
            <img src={monkeyFace} alt="Monkey progress marker" />
          </div>
        </div>

      </section>

      {/* Right: Puzzle Section */}
      <section className="gameplay-puzzle">

        <div className="puzzle-header">
          <h2>Level One</h2>
          <div className="lives">♡ ♡ ♡</div>
        </div>

        {/* Timer Bar */}
        <div className="timer-bar">
          <div className="timer-bar__progress"></div>
        </div>

        {/* Puzzle Image Placeholder */}
        <div className="puzzle-image-placeholder">
          <span>Generated puzzle will appear here</span>
        </div>

        <p className="puzzle-instruction">
          Guess the right answer to solve this puzzle
        </p>

        {/* Number Board */}
        <div className="number-grid">
          {Array.from({ length: 10 }, (_, index) => (
            <button key={index} className="number-button">
              {index}
            </button>
          ))}
        </div>

      </section>

      <p className="gameplay-tagline">
        Think Smart. Go Bananas!
      </p>

    </main>
  )
}

export default Gameplay
