import { LuSettings2 } from 'react-icons/lu'
import { BsArrowRightCircle } from 'react-icons/bs'
import { TbShip } from 'react-icons/tb'
import { GiSwissArmyKnife } from 'react-icons/gi'

export const data = {
  homePage: {
    headerSection: {
      heading: 'Your Engine For Innovation',
      description: [
        `As a Canadian leader in mechanical engineering, electronics design, robotics, automation, and product design, we're not just about our capabilities, but how they empower you`,
        `We are committed to transforming your ideas into reality, providing valuable solutions that drive your success. We're your tech-enablement partner in innovation.`,
      ],
      buttonText: `Let's talk Innovation`,
    },
    headerSubSection: [
      {
        heading: 'Product Development',
        description:
          'Everything you need to get your product development done quickly, creatively, and on budget.',
        icon: <LuSettings2 />,
      },
      {
        heading: 'Industry 4.0 & Robotics',
        description:
          'Integrating traditional manufacturing and industrial platforms and practices with the latest smart technology.',
        icon: <BsArrowRightCircle />,
      },
      {
        heading: 'Industrial & Marine',
        description:
          'Helping you develop reliable engineering solutions for harsh environment offshore operations.',
        icon: <TbShip />,
      },
      {
        heading: 'Aerospace & Defence',
        description:
          'Providing safe, controlled and reliable engineering for Aerospace and Defence projects.',
        icon: <GiSwissArmyKnife />,
      },
    ],
  },
}
