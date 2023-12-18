import { WrapperProps } from '@/utils/Interfaces'

export function H1({ children, styles }: WrapperProps) {
  return (
    <h1
      style={{ ...styles }}
      className="font-bold text-4xl md:text-5xl leading-normal md:leading-normal" // leading-normal - this is a bug
    >
      {children}
    </h1>
  )
}

export function H2({ children, styles }: WrapperProps) {
  return (
    <h2
      style={{ ...styles }}
      className="font-bold text-4xl leading-normal text-light-gray"
    >
      {children}
    </h2>
  )
}

export function H3({ children, styles }: WrapperProps) {
  return (
    <h3 style={{ ...styles }} className="font-semibold text-3xl leading-normal">
      {children}
    </h3>
  )
}

export function H4({ children, styles }: WrapperProps) {
  return (
    <h4 style={{ ...styles }} className="font-semibold text-2xl leading-normal">
      {children}
    </h4>
  )
}

export function H5({ children, styles }: WrapperProps) {
  return (
    <h5 style={{ ...styles }} className="font-semibold text-xl leading-normal">
      {children}
    </h5>
  )
}

export function H6({ children, styles }: WrapperProps) {
  return (
    <h6 style={{ ...styles }} className="font-semibold text-md leading-normal">
      {children}
    </h6>
  )
}
