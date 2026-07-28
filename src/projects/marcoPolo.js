import prototypeImg from '../assets/marco-polo-prototype.png';
import level0Img from '../assets/marco-polo-level0.png';
import abstractionImg from '../assets/marco-polo-abstraction.png';

export const marcoPolo = {
  id: 6,
  title: 'Marco Polo: Handheld UWB & GPS Tracking Device',
  thumbnail: prototypeImg,
  images: [
    {
      title: 'Final Prototype',
      description: 'The assembled 3D housing featuring the custom PCB, E-Ink display, and dual-action rotary encoder.',
      url: prototypeImg
    },
    {
      title: 'Level 0 Implementation',
      description: 'High-level system block diagram detailing inputs, outputs, and module interconnections.',
      url: level0Img
    },
    {
      title: 'System Abstraction Layer',
      description: 'Architectural representation of the firmware, hardware, and transport layers within the ESP32 tracking system.',
      url: abstractionImg
    }
  ],
  synopsis: 'A custom-engineered handheld tracking device delivering high-precision spatial positioning using Ultra-Wideband (UWB) time-of-flight measurements alongside GPS on a custom 4-layer PCB.',
  description: ' Maintaining awareness of loved ones’ whereabouts in busy or open environments—such as parks, events, or public gatherings—can be challenging. To help address this, we are developing a wearable tracking system that provides real-time, high-precision distance measurements using ultrawide band (UWB) technology. A primary unit defines a maximum distance threshold, and when exceeded, the system alerts users and provides directional guidance back using GPS-based redirection. This approach ensures accurate, low latency tracking without reliance on a constant network connection. As an optional feature, a companion mobile application enhances the user experience by visualizing movement data and providing additional location-based context via cellular connectivity and a Maps API. Our system prioritizes reliability, simplicity, and independence, making it well-suited for families, children, and friends looking to stay safely connected. ',
  tags: ['uwb', 'gps', 'esp32', 'spi', 'uart', 'pcb', 'c/c++', 'embedded', 'hardware'],
  features: [
    'Ultra-Wideband (UWB) Time-of-Flight spatial distance measurements (99.1% accuracy)',
    'Integrated GPS for broader geographic positioning & fallback tracking',
    'Energy-efficient E-Ink display interface for low-glare outdoor readability',
    'Custom 4-layer PCB with dedicated power-path management & 3.3V power plane',
    'Low-level C/C++ dual-core ESP32-S3 firmware architecture for sub-50ms latency'
  ],
  pdfUrl: '/marco_polo_final_report.pdf',
  reportDetails: {
    institution: 'Department of Electrical & Computer Engineering, UTRGV',
    course: 'Senior Design 2 - EECE 4362-01 (May 2026)',
    advisor: 'Dr. Hasina Huq',
    team: [
      {
        name: 'Juan Alonso',
        degree: 'BSCE',
        role: 'Hardware & PCB Lead Engineer | Backup Programmer',
        contributions: 'SD1: Led overall hardware design and system wiring architecture; acted as backup embedded programmer. SD2: Designed and routed custom 4-layer PCB, engineered power circuit refactoring & optimization, performed SMT hot-air rework soldering, and provided backup embedded C++ programming.'
      },
      {
        name: 'Francisco Olguin',
        degree: 'BSCE',
        role: 'Lead Embedded Software & Mobile App Engineer',
        contributions: 'SD1 & SD2: Served as primary software engineer across both phases. Developed dual-core embedded C/C++ firmware (UWB ranging algorithms and GPS NMEA parsing) and built companion mobile application.'
      },
      {
        name: 'Derek Cortez',
        degree: 'BSCE',
        role: 'Circuit Testing, 3D Housing & Deliverables Engineer',
        contributions: 'SD1: Circuit soldering, hardware testing, and prototype assembly. SD2: Designed and fabricated 3D enclosure housing, managed technical project deliverables, and led documentation.'
      }
    ],
    metrics: [
      { label: 'UWB Ranging Accuracy', value: '99.1%' },
      { label: 'Avg. Distance Deviance', value: '0.5 m' },
      { label: 'Peak Line-of-Sight Range', value: '100.15 m' },
      { label: 'GPS Cold Acquisition', value: '15.4 sec' },
      { label: 'Total Unit Weight', value: '210 g' }
    ]
  },
  requiresScreenshot: true,
  videoDemos: [
    {
      title: 'Senior Design 2 Final Demo - Part 1',
      description: 'Overview of system architecture, hardware verification, and initial operational testing of the handheld tracking unit.',
      url: 'https://www.youtube.com/embed/eFkXJxpCqBc',
      originalUrl: 'https://youtu.be/eFkXJxpCqBc'
    },
    {
      title: 'Senior Design 2 Final Demo - Part 2',
      description: 'Live field demonstration showcasing UWB time-of-flight spatial accuracy, GPS integration, and real-time E-Ink display updating.',
      url: 'https://www.youtube.com/embed/XdCaZXNW4QI',
      originalUrl: 'https://youtu.be/XdCaZXNW4QI'
    },
    {
      title: 'Senior Design 1 Breadboard & Wiring Prototype',
      description: 'Early proof-of-concept testing using breadboards and jumper wires during SD1 to validate UWB and GPS hardware communication before PCB layout.',
      url: 'https://www.youtube.com/embed/g4KrJWcfJfU',
      originalUrl: 'https://youtube.com/shorts/g4KrJWcfJfU',
      isShort: true
    }
  ]
};
