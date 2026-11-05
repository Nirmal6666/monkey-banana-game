import monkeyMascot from '../assets/images/monkey-mascot.png'
import '../styles/brand.css'

type BrandProps = {
  size?: 'large' | 'small'
}

function Brand({ size = 'small' }: BrandProps) {
  return (
    <div className={`brand brand--${size}`}>
      <img
        src={monkeyMascot}
        alt="Banana Buddy monkey mascot"
        className="brand__mascot"
      />

      <h1 className="brand__title">
        Banana
        <br />
        Buddy
      </h1>
    </div>
  )
}

export default Brand