import type { FormEvent } from 'react'

import Brand from '../components/Brand'
import AuthCard from '../components/AuthCard'
import '../styles/auth.css'

type LoginProps = {
  onSignup: () => void
  onLogin: () => void
}

function Login({ onSignup, onLogin }: LoginProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: real authentication, then:
    onLogin()
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
          title="Welcome Back!"
          subtitle="Login to continue your adventure"
        >
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="login-options">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>

            <p className="signup-prompt">
              Don&apos;t have an account?{' '}
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  onSignup()
                }}
              >
                Sign Up
              </a>
            </p>
          </form>
        </AuthCard>
      </section>
    </main>
  )
}

export default Login