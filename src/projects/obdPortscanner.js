export const obdPortscanner = {
  id: 1,
  title: 'OBD Portscanner',
  synopsis: 'A hardware device that connects to a car\'s OBD-II port to read diagnostic data in real-time, built with Arduino and interfacing via CAN bus and SPI.',
  description: 'This project involved reverse-engineering the CAN bus signals to interpret real-time engine metrics like RPM, coolant temperature, and speed. The hardware consists of an Arduino Uno, a CAN bus shield, and a custom-designed PCB for power regulation. The data is logged to an SD card and can be viewed on an attached OLED display.',
  tags: ['arduino', 'can', 'spi', 'hardware', 'c++', 'embedded']
};
