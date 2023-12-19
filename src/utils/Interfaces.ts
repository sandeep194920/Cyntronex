import { ReactNode } from 'react'

export interface WrapperProps {
  children: ReactNode
  styles?: {}
}

export interface WrapperWithStyles extends WrapperProps {
  styles?: {}
}
export interface CardWithIcon {
  heading: string
  description: string | Array<string>
  image: string
}
