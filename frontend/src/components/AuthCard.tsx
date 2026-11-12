import { useId } from 'react'
import type { ReactNode } from 'react'

type AuthCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

function AuthCard({ title, subtitle, children }: AuthCardProps) {
  const titleId = useId()

  return (
    <section className="auth-card" aria-labelledby={titleId}>
      <header className="auth-card__header">
        <h2 id={titleId}>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>

      <div className="auth-card__content">{children}</div>
    </section>
  )
}

export default AuthCard