import { WrapperWithStyles } from '@/utils/Interfaces'

function CardWrapper({ children, styles }: WrapperWithStyles) {
  return (
    <div
      style={{
        borderRadius: `${2}rem`,
        boxShadow: '0 12px 14px rgba(0, 0, 0, 0.1)',
        ...styles,
      }}
      className="relative bg-white"
    >
      {children}
    </div>
  )
}

export default CardWrapper
