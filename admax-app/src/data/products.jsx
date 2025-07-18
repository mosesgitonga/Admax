const products = [
  {
    id: 5075,
    name: "Certified Refurbished Hp EliteBook 840 G6 Core i5 8th Generation 16GB Ram 256GB SSD 14 Inch Laptop",
    price: 44000,
    image: "products/Ceritified refurbished hp elitebook.webp",
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    description: `Operating system: Windows 10/11 Pro 64-bit Edition\nMemory: 16GB DDR4-2400 RAM\nStorage: 256GB PCIe NVMe Value M.2 TLC SSD\nOptical drive: No Optical Drive\nGraphics Processor: Intel® UHD Graphics 620\nProcessor: Intel® Core™ i5-8365U vPro processor (1.6GHz base frequency, up to 4.1GHz with Intel® Turbo Boost Technology, 6MB L3 cache, 4 Cores)\nProcessor Family: 8th Generation Intel® Core™ i5 processor\nDisplay: 14 inch (35.56 cm) diagonal FHD IPS eDP BrightView WLED-backlit slim touch screen, 250 nits, 45% NTSC (1920 x 1080)\nPackaging: Boxed`
  },

  {
    id: 1,
    name: "Dell Latitude 7280 12.5 inch Laptop Intel Core i5-6300U 2.5GHz 8GB RAM 256GB SSD Windows 10",
    price: 26000,
    image: "./products/Dell-latitude-7280.webp",
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    description: "Processor: intel core i5-7200U 2.50 GHz – 3.1 Ghz i5 7th Gen Processor\nScreen size 12.5 inches Full HD\n8GB DDR4 RAM (upgrade available)\nSSD: 256GB SSD (upgrade available)\nOS: Win10 Pro\nFeatures: Wifi, Bluetooth, Built-in Microphone, Built-in Webcam\nEthernet, SD-card reader, USB Ports, HDMI, USB-C/Thunderbolt\nHD Graphics 620"
  },
  {
    id: 2,
    name: "Dell Latitude 5280",
    price: 27000,
    image: "./products/Dell-latitude-5280.webp",
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    description: 'Intel Core i5-7th Gen\n12" Non-Touch HD (1366 x 768) LCD w/HD Cam (WWAN)\n8GB Memory\n128GB Solid State Drive\n'
  },
  {
    id: 3,
    name: "Lenovo Thinkpad X270 Core i5-6th Gen 8GB 256GB SSD Laptop",
    price: 20000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/Lenovo thinkpad x270.webp",
    description: `Processor: Intel Core i5-6200U 2.40GHz\nMemory: 8GB DDR4 RAM
    Hard Drive: 256GB SSD
    Optical Drive: No Optical Drive
    Graphics: Intel HD Graphics 520
    Display: 12,5 HD (1366 x 768) LED Display
    Software: Windows 10 Professional (64-Bit)`
  },
  {
    id: 4,
    name: "Lenovo ThinkPad T480 Intel Core i5 8th Gen 8GB RAM 256GB SSD 14 Inches HD Monitor",
    price: 30000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "products/Lenovo-ThinkPad-T480.webp",
    description: `
    Operating system: Windows 10/11 Pro – 64 Bit Edition
    Memory: 8GB DDR4 – 2400MHz SDRAM (1 x 8GB) | Up to 32GB DDR4 Memory
    Storage: 256GB PCIe® NVMe™ M.2 SSD
    Optical drive: None
    Graphics Processor: Integrated: Intel® UHD Graphics 620
    Processor: Intel® Core™ i5-8350U (1.7 GHz base frequency, up to 3.6 GHz with Intel® Turbo Boost Technology, 6 MB cache, 4 cores)
    Processor Family: 8th Generation Intel® Core™ i5 processor
    Display: 14 inches (35.56 cm) diagonal ) HD (1366×768), anti-glare, LED backlight, 220 nits, 16:9 aspect ratio, 400:1 contrast ratio`
  },
  {
    id: 5, 
    name: `Lenovo ThinkPad T470 Intel Core i5-7350U 8GB RAM 500GB HDD 14" FHD Display`,
    price: 28000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/lenovo t470.webp",
    description: `
    Brand: Lenovo
    Model: ThinkPad T470
    7th Generation Intel Core i7-7350U
    8GB DDR4 RAM
    500GB HDD
    14-inch FHD Anti-Glare (Matte) Non-touch IPS Display (1920x1080)
    Intel 8260 AC-WiFi
    Fingerprint Reader
    Backlit Keyboard
    Intel HD 520 Graphics
`
  },
  {
    id: 2020,
    name: `HP ProBook 11 G2 Intel Celeron 11.6" 4GB DDR4 RAM 500GB HDD`,
    price: 17000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/HP probook 11 G2.webp",
    description:`
    Display Size (in): 11.6
    Operating System: Windows 10
    Screen Technology: LED
    Storage: 500 GB
    RAM : 4GB
    Model: Hp Probook`
  },
  {
    id: 2342,
    name: `HP EliteBook x360 1030 G3 Intel Core i7 8th Gen 8GB RAM 512GB SSD 13.3 Inches FHD Touchscreen Display`,
    price: 50000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/HP-EliteBook-x360-1030-G3.webp",
    description: `
    Operating system: Windows 10 Pro 64-Bit Edition
    Memory: 8GB
    Storage: 512GB M.2 SATA SSD (Solid State Drive)
    Optical drive: No optical drive
    Graphics Processor: Integrated: Intel® UHD Graphics 620
    Processor: Intel® Core™ i7-8250U (1.9 GHz base frequency, up to 3.4 GHz with Intel® Turbo Boost Technology, 6 MB cache, 4 cores)
    Processor Family: 8th Generation Intel® Core™ i7 processor
    Display: 13.3 Inches (33.8 cm) diagonal FHD IPS eDP + PSR anti-glare LED-backlit touch screen, direct bonded with Corning® Gorilla® Glass 4, 700 cd/m², 100% sRGB (1920 x 1080); HP Sure View Integrated Privacy Screen`
  },
  {
    id: 231,
    name: `HP EliteBook 830 G6 Intel Core i5 8th Gen 8GB RAM 256GB SSD 13.3 Inch FHD Display`,
    price: 35000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/HP-EliteBook 830 G6.webp",
    description: `Operating system: Windows 10/11 Pro 64-Bit Edition
    Memory: 8GB DDR4 – 2400MHz SDRAM | Up to 32GB
    Storage: 256GB M.2 SATA SED SSD
    Processor : 8th Generation Intel® Core™ i5-8365U processor
    Graphics Processor: Integrated: Intel® UHD Graphics 620
    Display: 13.33 inches (33.78 cm) diagonal FHD IPS BrightView WLED-backlit with Corning® Gorilla® Glass 5, 1000 cd/m², 100% sRGB (1920 x 1080)`
  },
  {
    id: 541,
    name: `Hp EliteBook 820 G3 Core i5 8GB Ram- 256gb SSD`,
    price: 22000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/Hp elite book 820 g3.webp",
    description: `Intel i5-6200U 2.4GHz 3MB Cache
    8GB RAM
    256 GB Solid State Drive
    Brand: HP
    Product Line: HP EliteBook
    Model: 820 G3
    Localization: English
    Intel HD Graphics 520
    13 inches Screen Display
    720p HD Webcam
    Windows 10 Pro 64-Bit Edition
    Backlit Keyboard, Media Card Reader, External SIM`
  },
  {
    id: 2334,
    name: `Hp 840 G3 Laptop Core i5 6th Gen 8GB Ram 256GB SSD`,
    price: 24000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/Hp-Elitebook-840-G3-Intel-Core-i7-6th-Generation-8GB-RAM-256GB-SSD-14-Inches-FHD-Display-3-1.webp",
    description: `Model: Hp Elitebook 840 G3
    CPU:  Intel Core i5 (6th Gen) 6300U / 2.3GHz
    Max Turbo Speed:  2.8 GHz
    Memory: 8 GB DDR4 SDRAM
    Storage: 256GB SSD
    Number of Cores: Dual-Core
    Cache: 3 MB
    64-bit Computing: Yes
    Memory Speed: 2133 MHz
    Graphics Processor: Intel HD Graphics 520
    Webcam: Yes
    Sound: Stereo speakers, two microphones
    OS: Windows 10 Pro – 64 bit edition
    Display: 14 inch (35.6 cm) Widescreen LED backlight (1920 x 1080) FHD resolution `
  },
  {
    id: 535,
    name: `Dell Latitude E5270 12.5" Intel Dual-Core i5, 6th Gen, 8GB RAM, 256GB SSD, Windows 10 Professional Laptop Nairobi`,
    price: 24000,
    category: ["New Deals", "Refurbished Deals", "Laptops"],
    image: "./products/Dell-latitude-ef.webp",
    description: `Display Type: 12.5”FHD (1366x768) Anti-Glare LCD.
    Internal Storage: 8GB RAM,
     256 SSD Storage
    Graphics Processor: Intel HD Graphics 4400
    Processor : Intel® Core™ i5-6300U with Intel HD Graphics 4400 (2.4 GHz, up to 2.5 GHz with Intel Turbo Boost Technology, 3 MB cache) X64 Based Processor
    Battery: 4-cell, 52 WHr primary: up 4 hours 15 minutes
    Full-sized, spill resistant keyboard
    Warranty : 1 year warranty
    Windows 10 pro Installed`
  }
];


export default products;
