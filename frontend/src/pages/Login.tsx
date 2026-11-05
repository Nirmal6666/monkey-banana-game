import Brand from '../components/Brand'
import AuthCard from '../components/AuthCard'
import '../styles/auth.css'

type LoginProps = {
  onSignup: () => void
}

function Login({ onSignup }: LoginProps) {
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
          title="Welcome Back!"
          subtitle="Login to continue your adventure"
        >
          <p><form className="login-form">

  <div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      required
    />
     </div>
      <div className="login-options">
      <a href="#">Forgot Password?</a>
   </div>

  <button type="submit" className="login-button">
    Login
  </button>

  <p className="signup-prompt">
  Don't have an account?{' '}
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
</p>
        </AuthCard>
      </section>

    </main>
  )
}

export default Login