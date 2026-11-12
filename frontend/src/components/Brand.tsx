import monkeyMascot from '../assets/images/monkey-mascot.png'
import '../styles/brand.css'

type BrandProps = {
  size?: 'large' | 'small'
  /** Use 'p' when the page already has its own <h1>. */
  as?: 'h1' | 'p'
}

function Brand({ size = 'small', as: Title = 'h1' }: BrandProps) {
  return (
    <div className={`brand brand--${size}`}>
      <img
        src={monkeyMascot}
        alt=""
        aria-hidden="true"
        className="brand__mascot"
        decoding="async"
      />

      <Title className="brand__title">
        Banana{' '}
        <br />
        Buddy
      </Title>
    </div>
  )
}

export default Brand