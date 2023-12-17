import Image from 'next/image'
import Button from './Button/Button'

function Navbar() {
  return (
    <nav className="flex justify-between p-10 px-16 items-center border border-b-2 shadow-sm mb-6">
      <Image
        src="./assets/logo/transparent.svg"
        alt="cyntronex-logo"
        width={200}
        height={200}
      />
      <div className="hidden lg:visible lg:flex space-x-14 items-center">
        <ul className="flex space-x-14 text-black-text">
          <li>Programs</li>
          <li>Services</li>
          <li>About</li>
          <li>Our Work</li>
        </ul>
        <Button>Reach out to us</Button>
      </div>
      <div className="visible lg:hidden group cursor-pointer">
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
      </div>
    </nav>
  )
}

export default Navbar
