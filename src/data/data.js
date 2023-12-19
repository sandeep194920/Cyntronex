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

  featureCards: {
    title: 'Strategic Engineering Nexus',
    features: [
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
        img: '/assets/mechanical.png',
      },
    ],
  },

  productsOffered: {
    title: 'Products we offer',
    products: [
      {
        heading: 'Auto tightening mechanism',
        description: `An auto-tightening mechanism device designed to automatically secure or tighten a component without manual intervention. This mechanism is commonly employed in various applications to ensure proper fastening and prevent issues such as loosening, vibration, or structural instability.
        By eliminating the need for manual tightening, auto-tightening mechanisms not only improve efficiency but also reduce the risk of human error, ensuring consistent and optimal fastening
        `,
        img: '/assets/products1.png',
      },
      {
        heading: 'Automatic quick connect mechanism',
        description: `A quick connection mechanism is an innovative solution for expedited and hassle-free coupling or joining of electrical cable connection. This mechanism is strategically designed to enable swift assembly and disassembly without the need for intricate tools or extended manual labor.
        `,
        img: '/assets/products2.png',
      },
    ],
  },
}
