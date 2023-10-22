import { WrapperWithStyles } from '@/utils/Interfaces'

function CardWrapper({ children, styles }: WrapperWithStyles) {
  return (
    <div
      style={{
        borderRadius: `${2}rem`,
        boxShadow: '0 2px 18px 0 rgba(0, 0, 0, 0.3)',
        ...styles,
      }}
      className="relative bg-white"
    >
      {children}
    </div>
  )
}

export default CardWrapper
