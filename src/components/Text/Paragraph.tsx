import { WrapperWithStyles } from '@/utils/Interfaces'

function Paragraph({ children, styles }: WrapperWithStyles) {
  return (
    <p style={{ ...styles }} className="text-light-gray">
      {children}
    </p>
  )
}

export default Paragraph
