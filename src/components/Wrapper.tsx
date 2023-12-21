import { WrapperProps } from '@/utils/Interfaces'

function Wrapper({ children, styles }: WrapperProps) {
  return (
    <article style={{ ...styles }}>
      <div className="w-[85%] mx-auto">{children}</div>
    </article>
  )
}

export default Wrapper
