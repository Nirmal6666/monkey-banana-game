import { useState } from 'react'
import type { FormEvent } from 'react'

import Brand from '../components/Brand'
import AuthCard from '../components/AuthCard'
import '../styles/auth.css'

type SignupProps = {
  onLogin: () => void
  onSignupSuccess: (username: string) => void
}

function Signup({ onLogin, onSignupSuccess }: SignupProps) {
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    if (data.get('password') !== data.get('confirmPassword')) {
      setError('Passwords do not match.')
      return
    }

    setError('')
    // TODO: real sign-up, then:
   // inside handleSubmit, replacing onSignupSuccess()
onSignupSuccess(String(data.get('username')))
  }

  return (
    <main className="auth-page">
      <section className="auth-page__branding">
        <Brand size="large" />
        <p className="auth-page__tagline">
          Think Smart. <span>Go Bananas!</span>
        </p>
      </section>

      <section className="auth-page__form">
        <AuthCard
          title="Create Account"
          subtitle="Join Banana Buddy and start your adventure"
        >
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                autoComplete="username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                aria-invalid={error ? true : undefined}
                required
              />
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="auth-button">
              Sign Up
            </button>

            <p className="signup-prompt">
              Already have an account?{' '}
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  onLogin()
                }}
              >
                Login
              </a>
            </p>
          </form>
        </AuthCard>
      </section>
    </main>
  )
}

export default Signup