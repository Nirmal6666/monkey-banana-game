import Brand from '../components/Brand'
import '../styles/splash.css'

function Splash() {
  return (
    <main className="splash">
      <Brand size="large" />

      <p className="splash__tagline">
        Think Smart. Go Bananas!
      </p>
    </main>
  )
}

export default Splash