import { useEffect, useRef } from 'react'

import monkeyWin from '../assets/images/monkey-win.png'
import monkeyLose from '../assets/images/monkey-lose.png'
import '../styles/result-dialog.css'

type ResultDialogProps = {
  result: 'won' | 'lost'
  onNext: () => void   // won: go to the next round
  onRetry: () => void  // lost: try again
  onClose: () => void  // lost: dismiss
}

function ResultDialog({ result, onNext, onRetry, onClose }: ResultDialogProps) {
  const won = result === 'won'
  const primaryRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    primaryRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !won) onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [won, onClose])

  return (
    <div className="result-overlay">
      <div
        className={`result-card result-card--${result}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="result-title"
      >
        <h2 id="result-title" className="result-card__title">
          {won ? 'You won!!' : 'Oops! You Lost!'}
        </h2>

        <img
          src={won ? monkeyWin : monkeyLose}
          alt=""
          className="result-card__monkey"
        />

        <div className="result-card__actions">
          {won ? (
            <button
              ref={primaryRef}
              type="button"
              className="result-button result-button--green"
              onClick={onNext}
            >
              Next round
            </button>
          ) : (
            <>
              <button
                type="button"
                className="result-button result-button--red"
                onClick={onClose}
              >
                Close
              </button>
              <button
                ref={primaryRef}
                type="button"
                className="result-button result-button--green"
                onClick={onRetry}
              >
                Retry
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResultDialog