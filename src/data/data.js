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
    aboutSection: {
      heading: 'Cyntronex',
      description: `Cyntronex is Canada's dynamic engineering and design group, we're on a mission to make a profound impact. From a basement operation to a powerhouse team of over 50 innovative experts, we tackle complex technical challenges, delivering tailor-made solutions that enhance the world.

      Driven by curiosity, we place your challenges at the heart of our operations. Through our unique matrix managed, focussed team structure, we strategically apply our expertise to ensure outstanding results. We manage the inherent risks of research and development by thoroughly examining your idea from idea, through concept and prototyping to fabrication. If the necessary technologies don't exist, we design them; if we lack expertise, we source it. With us, you're not just procuring an engineering group; you're gaining a committed partner in innovation.`,
      buttonText: 'How Cyntronex Helps',
    },
  },
}
