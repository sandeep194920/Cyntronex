import { WrapperProps } from '@/utils/Interfaces'

export function H1({
  children,
  styles,
  dangerouslySetInnerHTML,
}: WrapperProps) {
  if (dangerouslySetInnerHTML) {
    return (
      <h1
        className="font-bold text-4xl md:text-5xl leading-normal md:leading-normal"
        style={{ ...styles }}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    )
  } else {
    return (
      <h1
        className="font-bold text-4xl md:text-5xl leading-normal md:leading-normal"
        style={{ ...styles }}
      >
        {children}
      </h1>
    )
  }
}

export function H2({ children, styles }: WrapperProps) {
  return (
    <>
      <h2
        style={{ ...styles }}
        className="font-bold text-3xl text-light-gray2 text-center mt-24 mb-10 leading-4 tracking-wide"
      >
        {children}
      </h2>
      <div className="border-t w-[13rem] mx-auto mb-8 border-primary-clr"></div>
    </>
  )
}

export function H3({ children, styles }: WrapperProps) {
  return (
    <h3
      style={{ ...styles }}
      className="font-semibold mb-4 text-2xl leading-normal"
    >
      {children}
    </h3>
  )
}

export function H4({ children, styles }: WrapperProps) {
  return (
    <h4 style={{ ...styles }} className="font-semibold text-xl leading-normal">
      {children}
    </h4>
  )
}

export function H5({ children, styles }: WrapperProps) {
  return (
    <h5 style={{ ...styles }} className="font-semibold text-lg leading-normal">
      {children}
    </h5>
  )
}

export function H6({ children, styles }: WrapperProps) {
  return (
    <h6 style={{ ...styles }} className="font-bold uppercase text-md leading-9">
      {children}
    </h6>
  )
}
