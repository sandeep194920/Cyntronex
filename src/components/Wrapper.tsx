import { WrapperProps } from '@/utils/Interfaces'

function Wrapper({ children, styles }: WrapperProps) {
  return (
    <article style={{ ...styles }}>
      <div className="w-[90%] mx-auto">{children}</div>
    </article>
  )
}

export default Wrapper
