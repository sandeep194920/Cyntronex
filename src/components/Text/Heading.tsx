import { WrapperProps } from '@/utils/Interfaces'

export function H1({ children }: WrapperProps) {
  return <h1 className="font-bold text-6xl leading-normal">{children}</h1>
}

export function H2({ children }: WrapperProps) {
  return <h2 className="font-bold text-4xl leading-normal">{children}</h2>
}

export function H3({ children }: WrapperProps) {
  return <h3 className="font-bold text-3xl leading-normal">{children}</h3>
}

export function H4({ children }: WrapperProps) {
  return <h4 className="font-bold text-3xl leading-normal">{children}</h4>
}

export function H5({ children }: WrapperProps) {
  return <h5 className="font-bold text-xl leading-normal">{children}</h5>
}

export function H6({ children }: WrapperProps) {
  return <h6 className="font-bold text-md leading-normal">{children}</h6>
}
