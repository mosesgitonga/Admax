import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Catalog.css";

const Catalog = () => {
  const items = [
    { image: "products/Hp 840.jpeg", name: "HP 840 G3", price: "ksh 27,000", description: 'Laptop comes with 14" HD Display, intel core i5-6300U, 2.4GhZ, 256GB SSD, 8GB DDR4 RAM' },
    { image: "products/lenovo x240.jpeg", name: "Lenovo X240", price: "ksh 24,000", description: 'Laptop comes with 12.5" HD Display, intel core i5-4300U, 128GB SSD, 8GB DDR4 RAM'},
    { image: "products/lenovo s240.jpeg", name: "Lenovo X240", price: "ksh 21,000", description: 'Laptop comes with 12.5" HD Display, intel core i5-4210U, 500GB HDD, 4GB DDR3 RAM' },
    { image: "products/huawei xpon.jpeg", name: "Huawei XPON", price: "ksh 4,500", description: "" },
    { image: "products/acer adapter.jpeg", name: "Acer Adapter", price: "ksh 1,500", description: "65w" },
    { image: "products/type c adpater laptop.jpeg", name: "Type C Adapter", price: "ksh 4,000", description: "For all type C laptops, tablets etc. Max 65w" },
    { image: "products/Hp Big pin.jpeg", name: "HP big pin", price: "ksh 1,500", description: "65w" },

    { image: "products/toshiba jack.jpeg", name: "Toshiba", price: "ksh 1,500", description: 'Barrel jack, 65w'},
    { image: "products/lenovo big pin.jpeg", name: "Lenovo big pin", price: "ksh 1,500", description: ' 65w'},
    { image: "products/lenovo usb.jpeg", name: "Lenovo USB", price: "ksh 1,500", description: '65w' },
    { image: "products/Hp blue pin.jpeg", name: "HP blue pin", price: "ksh 1,500", description: "65w" },
    { image: "products/jbw tws4.jpeg", name: "JBL TWS4", price: "ksh 1,500", description: "" },
    { image: "products/m10 buds.jpeg", name: "M10 buds", price: "ksh 1,500", description: "" },
    { image: "products/freepods otw.jpeg", name: "Freepods", price: "ksh 2,000", description: "OTW-330" },

    { image: "products/s4 speaker.jpeg", name: "S4 speaker", price: "ksh 1,500", description: '65w'},
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr5fAiyG6zJJhPVxH6qTXkt1JDkAMlmsrWA&s", name: "BT Speaker", price: "ksh 2,000", description: ''},
    { image: "products/logitech m185.jpeg", name: "Logitech m185", price: "ksh 1,000", description: '' },
    { image: "products/hdd casing.jpeg", name: "HDD casing", price: "ksh 600", description: "" },
    { image: "products/wired mouse.jpeg", name: "Wired Mouse", price: "ksh 450", description: "" },
    { image: "products/wireless mouse.jpeg", name: "Wireless Mouse", price: "ksh 600", description: "" },
    { image: "products/necklace 4.jpeg", name: "Necklace 4", price: "ksh 4,500", description: "OEB-E50D" },

    { image: "products/oraimo watch plus.jpeg", name: "Oraimo watch 4 plus", price: "ksh 4,500", description: 'OSW 801'},
    { image: "products/256 ssd.jpeg", name: "256GB SSD", price: "ksh 4,500", description: ''},
    { image: "products/512 ssd.jpeg", name: "512GB SSD", price: "ksh 6,500", description: '' },
    { image: "products/128gb ssd.jpeg", name: "128GB SSD", price: "ksh 3,500", description: "" },
    { image: "products/wd elements.jpeg", name: "WD Elements", price: "ksh 1,200", description: "" },
    { image: "products/lenovo x240.jpeg", name: "Lenovo X240", price: "ksh 25,000",  description: "Core i5, RAM 4GB, 500GB HDD" },
    { image: "products/hdcvi.jpeg", name: "HDCVI DIGITAL VIDEO RECORDER", price: "ksh 2,000", description: "" },

    { image: "products/tenda n300.jpeg", name: "TENDA F3 N300", price: "ksh 2,000", description: ''},
    { image: "products/vga2hdmi.jpeg", name: "VGA TO HDMI CONVERTER", price: "ksh 2,000", description: ''},
    { image: "products/hp casing.jpeg", name: "HP LAPTOP CASING", price: "ksh 5,000", description: '' },
    { image: "products/laptop casing.jpeg", name: "LAPTOP CASINGS", price: "ksh 4,500", description: "" },
    { image: "products/hp touchpad.jpeg", name: "HP 840 g3 TOUCHPAD", price: "ksh ", description: "" },
    { image: "products/notebook.jpeg", name: "hp Notebook 255", price: "ksh 16,000",  description: "255 G1 Intel, 4GB RAM, 500GB Harddrive" },
    { image: "products/cctv.jpeg", name: "Full color dahua CCTV Camera", price: "ksh 3,500", description: "" },
  ];

  const phoneNumber = "+254711279189";
  const message = "Hello, I would like to know more about this product: ";

  const openWhatsApp = (item) => {
    const whatsappMessage = `${message}${item.name} (${item.price}). Check out the image here: ${window.location.origin}/${item.image}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="catalog">
      <div className="heading">
        <h2>Laptops For Sale</h2>
        <p>DEALS ON EX-UK LAPTOPS & ACCESSORIES</p>
      </div>

      <div className="catalog">
        {items.map((item, index) => (
          <div key={index} className="catalog-item">
            <div className="item-image">
              <img src={item.image || "placeholder.png"} alt={item.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <p className="item-description">{item.description}</p>
              <button className="whatsapp-button" onClick={() => openWhatsApp(item)}>
                <FontAwesomeIcon icon={faWhatsapp} /> Contact on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
