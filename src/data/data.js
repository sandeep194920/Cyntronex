import { LuSettings2 } from 'react-icons/lu'
import { BsArrowRightCircle } from 'react-icons/bs'
import { TbShip } from 'react-icons/tb'
import { GiSwissArmyKnife } from 'react-icons/gi'

export const data = {
  header: {
    heading: `Welcome to Cyntronex, 
    Where Ideas Take Shape and Innovations
    Comes to Life`,
    tagLine: [
      `Cyntronex is a dynamic and forward-thinking company with a strong
    commitment to providing high-quality solutions to our clients. Our
    team brings a wealth of experience in the technology and design
    industry, which has allowed us to build a reputation for excellence
    and reliability.`,
      ` At Cyntronex, we excel in product design with core competencies in
    mechanical design, mechanical engineering, materials science,
    manufacturing process optimization, and simulation analysis. Our
    team's expertise ensures efficient, compliant, and innovative
    solutions for your product design needs.`,
    ],
  },
  featureCards: [
    {
      heading: 'Product Design',
      description: [
        `2D and 3D Engineering Design`,
        `Structural Design`,
        `Design for Manufacturing (DFM)`,
        `Materials Engineering`,
        `Root Cause Analysis`,
        `Reverse Engineering`,
        `Stack up analysis GD&T`,
        `Sensor I/O, MCU & Processor Firmware`,
        `PCB Design, PCB Schematics`,
        `Controls & Electrical Schematics, Layout & Prototyping, Embedded Systems
        and more.`,
      ],
      icon: <LuSettings2 />,
      img: '/assets/design.png',
    },
    {
      heading: 'Manufacturing',
      description: [
        'Machining',
        'Forming',
        'Assembly',
        '3D Printing & Prototyping',
      ],
      icon: <BsArrowRightCircle />,
      img: '/assets/engineering.png',
    },
    {
      heading: 'Advanced Engineering and Automation',
      description: [
        'Finite Element Analysis (FEA)',
        'Computational Fluid Dynamics (CFD)',
        'Industrial Design',
        'Controls & Electrical Schematics',
        'Panel Build & Test',
        'Functional Safety Assessments',
        'Machine Vision and QA Systems',
        'Third Party Robotics Integration',
        'Panel Build & Test',
        'Safety, Risk & ROI Assessments and Monitoring',
      ],
      icon: <TbShip />,
      img: '/assets/mechanical.png',
    },
  ],
}
