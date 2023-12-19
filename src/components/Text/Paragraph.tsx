import { WrapperWithStyles } from '@/utils/Interfaces'

function Paragraph({ children, styles }: WrapperWithStyles) {
  return (
    <p style={{ ...styles }} className="text-dark-gray leading-8">
      {children}
    </p>
  )
}
export default Paragraph
