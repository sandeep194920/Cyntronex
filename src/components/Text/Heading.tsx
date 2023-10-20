import { WrapperProps } from '@/utils/Interfaces'
import { ReactNode } from 'react'

function H1({ children }: WrapperProps) {
  return <h1 className="font-bold text-6xl leading-normal">{children}</h1>
}

export default H1
