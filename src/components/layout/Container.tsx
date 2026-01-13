// Should I use type of interface here?
type ContainerProps = {
  children: React.ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
