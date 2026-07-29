export const customMouse = {
  id: 8,
  title: 'Gaming Mouse',
  synopsis: 'A roadmap for engineering a custom gaming mouse from the ground up, featuring a custom 4-layer PCB, ARM-based high-speed USB polling firmware, and 3D-printed ergonomic housing.',
  description: 'This project outlines the end-to-end hardware bring-up roadmap for building a custom high-performance gaming mouse. Building a peripheral from the ground up requires transitioning from basic breakout boards to a fully integrated, high-density layout. The logic and USB interface will be driven by an ARM-based microcontroller for high-frequency input handling. The design involves routing a custom 4-layer PCB and populating it entirely with Surface Mount Devices (SMD), requiring precise SMT soldering and hot air rework for the optical sensor, switches, and MCU.\n\nThe firmware layer aims to handle high-speed USB polling protocols, pushing the polling rate to 1000Hz or higher to minimize input latency. The ARM MCU must efficiently poll the optical sensor via SPI or I2C, process raw X/Y translation and lift-off distance data, and package it into USB HID reports with millisecond precision. Finally, the project involves CAD modeling and iterating on a 3D-printed outer shell with exact mounting points, correct tension/pre-travel for primary clicks, and optimized weight distribution.',
  tags: ['hardware', 'pcb', 'arm', 'firmware', 'c/c++', 'cad', '3d printing', 'usb hid', 'spi'],
  status: 'Research & Planning Phase'
};
