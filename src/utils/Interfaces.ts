import { ReactNode } from 'react'

export interface WrapperProps {
  children: ReactNode
}

export interface WrapperWithStyles extends WrapperProps {
  styles?: {}
}
