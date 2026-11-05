type AuthCardProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="auth-card__content">
        {children}
      </div>
    </div>
  )
}

export default AuthCard