import Brand from '../components/Brand'
import AuthCard from '../components/AuthCard'
import '../styles/auth.css'

type SignupProps = {
  onLogin: () => void
}

function Signup({ onLogin }: SignupProps) {
  return (
    <main className="auth-page">

      <section className="auth-page__branding">
        <Brand size="large" />

        <p className="auth-page__tagline">
          Think Smart. Go Bananas!
        </p>
      </section>

      <section className="auth-page__form">
        <AuthCard
          title="Create Account"
          subtitle="Join Banana Buddy and start your adventure"
        >
        <form className="signup-form">

  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      placeholder="Enter your username"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      placeholder="Create a password"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input
      type="password"
      id="confirmPassword"
      placeholder="Confirm your password"
      required
    />
  </div>

  <button type="submit" className="signup-button">
    Sign Up
  </button>

</form>
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
        </AuthCard>
      </section>

    </main>
  )
}

export default Signup