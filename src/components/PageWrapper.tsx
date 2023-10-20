import { WrapperProps } from '@/utils/Interfaces'

function PageWrapper({ children }: WrapperProps) {
  return (
    // bg-yellow-50 sm:bg-red-100 md:bg-green-100
    <div className="w-[90%] mx-auto">{children}</div>
  )
}

export default PageWrapper
