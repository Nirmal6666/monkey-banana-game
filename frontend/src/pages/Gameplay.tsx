import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import ResultDialog from '../components/ResultDialog'

import jumpingMonkey from '../assets/images/jumping-monkey.png'
import bananaDecoration from '../assets/images/banana-decoration.png'
import monkeyFace from '../assets/images/monkey-face.png'
import { levels } from '../data/levels'
import '../styles/gameplay.css'
import { getPuzzle, checkAnswer } from '../services/puzzleService'
import type { Puzzle } from '../services/puzzleService'

type GameplayProps = {
  onBack: () => void
  playerName?: string
}

const MAX_LIVES = 3

function Gameplay({ onBack, playerName = 'Player' }: GameplayProps) {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentPuzzle, setCurrentPuzzle] = useState(1)
 const [lives, setLives] = useState(MAX_LIVES)
const [isChecking, setIsChecking] = useState(false) // TODO: decrease on wrong answers
  const [result, setResult] = useState<'won' | 'lost' | null>(null)

  const [puzzle, setPuzzle] = useState<Puzzle | null>(null)
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
  async function loadPuzzle() {
    try {
      setIsLoading(true)
      setError(null)

      const newPuzzle = await getPuzzle()
      setPuzzle(newPuzzle)
    } catch (err) {
      setError('Could not load the puzzle. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  loadPuzzle()
}, [])

  const levelData = levels[currentLevel - 1]
  const progress = ((currentPuzzle - 1) / levelData.totalPuzzles) * 100

  const handleCompletePuzzle = () => {
    if (currentPuzzle < levelData.totalPuzzles) {
      setCurrentPuzzle((puzzle) => puzzle + 1)
    } else if (currentLevel < levels.length) {
      setCurrentLevel((level) => level + 1)
      setCurrentPuzzle(1)
    }
  }
    const handleAnswer = async (answer: number) => {
    if (!puzzle || isChecking || lives === 0) return

    try {
      setIsChecking(true)
      setError(null)

      const result = await checkAnswer(puzzle.puzzleId, answer)
if (result.correct) {
  if (currentPuzzle < levelData.totalPuzzles) {
    setCurrentPuzzle((previous) => previous + 1)

    const newPuzzle = await getPuzzle()
    setPuzzle(newPuzzle)
  } else {
    setResult('won')
  }
} else {
  setLives((previousLives) => {
    const remainingLives = previousLives - 1

    if (remainingLives === 0) {
      setResult('lost')
    }

    return remainingLives
  })
}
    } catch (err) {
      setError('Could not check your answer. Please try again.')
    } finally {
      setIsChecking(false)
    }
  }
       const handleNextRound = async () => {
    if (currentLevel >= levels.length) {
      onBack()
      return
    }

    setCurrentLevel((level) => level + 1)
    setCurrentPuzzle(1)
    setLives(MAX_LIVES)
    setResult(null)

    try {
      setIsLoading(true)
      setError(null)

      const newPuzzle = await getPuzzle()
      setPuzzle(newPuzzle)
    } catch (err) {
      setError('Could not load the next puzzle. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

          const handleRetry = async () => {
    setCurrentPuzzle(1)
    setLives(MAX_LIVES)
    setResult(null)

    try {
      setIsLoading(true)
      setError(null)

      const newPuzzle = await getPuzzle()
      setPuzzle(newPuzzle)
    } catch (err) {
      setError('Could not load a new puzzle. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <main className="gameplay-page">
      <header className="gameplay-topbar">
        <button type="button" className="gameplay-back-button" onClick={onBack}>
          ← Back
        </button>

        <div className="player-chip">
          <div className="player-avatar" aria-hidden="true">♙</div>
          <p className="player-name">{playerName}</p>
        </div>
      </header>

      <div className="gameplay-board">
        {/* Left: hero monkey (hidden on small screens) */}
        <section className="gameplay-hero" aria-hidden="true">
          <img
            src={jumpingMonkey}
            alt=""
            className="jumping-monkey"
          />
        </section>

        {/* Middle: progress track. The monkey climbs toward the banana */}
        <section className="gameplay-progress" aria-label="Level progress">
          <img
            src={bananaDecoration}
            alt=""
            aria-hidden="true"
            className="progress-banana"
          />

          <div
            className="progress-line"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label={`Puzzle ${currentPuzzle} of ${levelData.totalPuzzles}`}
            style={{ '--progress': `${progress}%` } as CSSProperties}
          >
            <div className="progress-line__fill" />

            {Array.from({ length: levelData.checkpoints }, (_, index) => (
              <div
                key={index}
                className="progress-checkpoint"
                style={
                  {
                    '--progress': `${((index + 1) / (levelData.checkpoints + 1)) * 100}%`,
                  } as CSSProperties
                }
              />
            ))}

            <div className="progress-marker">
              <img src={monkeyFace} alt="" />
            </div>
          </div>
        </section>

        {/* Right: puzzle card */}
        <section className="gameplay-puzzle" aria-label="Puzzle">
          <div className="puzzle-header">
            <h2>{levelData.name}</h2>
            <div
              className="lives"
              role="img"
              aria-label={`${lives} of ${MAX_LIVES} lives left`}
            >
              {Array.from({ length: MAX_LIVES }, (_, index) => (
                <span key={index} className={index < lives ? '' : 'lives__lost'}>
                  {index < lives ? '♥' : '♡'}
                </span>
              ))}
            </div>
          </div>

          <div className="puzzle-meta">
            <p className="puzzle-counter">
              Puzzle {currentPuzzle} of {levelData.totalPuzzles}
            </p>
            <div className="timer-bar" aria-hidden="true">
              <div className="timer-bar__progress" />
            </div>
          </div>

          <div className="puzzle-image-placeholder">
                         {isLoading && <span>Loading puzzle...</span>}

                         {error && <span>{error}</span>}

                     {puzzle && (
                         <img
                          src={puzzle.imageUrl}
                            alt="Banana number puzzle"
                             className="puzzle-image"
                                 />
                                     )}
                                </div>

          <p className="puzzle-instruction">
            Guess the right answer to solve this puzzle
          </p>

          <div className="number-grid">
  {Array.from({ length: 10 }, (_, index) => (
    <button
      key={index}
      type="button"
      className="number-button"
      onClick={() => handleAnswer(index)}
      disabled={isChecking || isLoading || !puzzle || lives === 0}
    >
      {index}
    </button>
  ))}
</div>

        </section>
      </div>
             {result && (
        <ResultDialog
          result={result}
          onNext={handleNextRound}
          onRetry={handleRetry}
          onClose={onBack}
        />
      )}
      <footer className="gameplay-tagline">Think Smart. Go Bananas!</footer>
    </main>
  )
}

export default Gameplay