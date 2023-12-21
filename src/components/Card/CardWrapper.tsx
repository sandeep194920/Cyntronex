import { WrapperWithStyles } from '@/utils/Interfaces'

function CardWrapper({ children, styles }: WrapperWithStyles) {
  return (
    <div
      style={{
        borderRadius: '2rem',
        boxShadow: '0 2px 18px 0 rgba(0, 0, 0, 0.3)',
        padding: '1.7rem',
        ...styles,
      }}
      className="relative bg-white"
    >
      {children}
    </div>
  )
}

export default CardWrapper
