import Image from 'next/image'
import Button from './Button/Button'

function Navbar() {
  return (
    <nav className="flex justify-between p-10 px-16 items-center border border-b-2 shadow-sm">
      <Image
        src="./assets/logo/transparent.svg"
        alt="cyntronex-logo"
        width={200}
        height={200}
      />
      <div className="flex space-x-14 items-center">
        <ul className="flex space-x-14 text-light-gray">
          <li>Programs</li>
          <li>Services</li>
          <li>About</li>
          <li>Our Work</li>
        </ul>
        <Button />
      </div>
    </nav>
  )
}

export default Navbar
